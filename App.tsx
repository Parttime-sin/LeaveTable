import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import HistoryPage from './pages/HistoryPage';
import LoginPage from './components/LoginPage';
import DebugConsole from './components/DebugConsole';
import ErrorBoundary from './components/ErrorBoundary';
import {
  MonthlySettings,
  MonthlyLeaveEntry,
  PageView,
  GroupType,
  createEmptyMonthlySettings,
} from './types';
import {
  isFirebaseEnabled,
  subscribeMonthSettings,
  subscribeMonthEntries,
  saveMonthSettings,
  saveLeaveEntry,
  deleteLeaveEntry,
  auth,
  loginWithGoogle,
  logout,
  checkRedirectResult,
  isRedirectPending,
  clearRedirectFlag,
} from './firebase';
import { monthKey as toMonthKey } from './utils/firestoreSchema';
import { writeAuditLog, diffSettingsAudits } from './utils/auditLog';
import { User } from 'firebase/auth';
import { addLog } from './logger';

const App: React.FC = () => {
  const [page, setPage] = useState<PageView>('filling');
  const [currentGroup, setCurrentGroup] = useState<GroupType>('A');

  // Current viewed month (defaults to this month)
  const today = new Date();
  const [currentMonthKey, setCurrentMonthKey] = useState<string>(
    toMonthKey(today.getFullYear(), today.getMonth())
  );

  // Month data (settings + entries) for the current month+group
  const [monthSettings, setMonthSettings] = useState<MonthlySettings>(
    createEmptyMonthlySettings(currentMonthKey, currentGroup)
  );
  const [monthEntries, setMonthEntries] = useState<MonthlyLeaveEntry[]>([]);

  // Auth State
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);

  // Data loading
  const [dataLoading, setDataLoading] = useState(true);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  // Debug console
  const [showDebug, setShowDebug] = useState(false);

  // Guard against write loops (settings only — entries are keyed per-doc so no loop)
  const isRemoteUpdate = useRef(false);

  // 1. Firebase availability
  useEffect(() => {
    setIsFirebaseReady(isFirebaseEnabled());
    addLog('App Mounted. Firebase Enabled: ' + isFirebaseEnabled());
  }, []);

  // Common Auth Error Handler
  const handleAuthError = (error: any) => {
    console.error('Auth Error:', error);
    let msg = '登入失敗，請重試。';
    if (error.code === 'auth/popup-closed-by-user') msg = '登入視窗已被關閉。';
    else if (error.code === 'auth/unauthorized-domain') msg = `網域未授權 (${window.location.hostname})。`;
    else if (error.message) msg = error.message;
    alert(msg);
  };

  // 2. Auth init + redirect handling
  useEffect(() => {
    let isMounted = true;
    let safetyTimer: ReturnType<typeof setTimeout>;

    if (!isFirebaseEnabled() || !auth) {
      setAuthLoading(false);
      return;
    }

    safetyTimer = setTimeout(() => {
      if (isMounted && authLoading) {
        addLog('Safety Timer Triggered (8s). Clearing loading state.', 'error');
        setAuthLoading(false);
        clearRedirectFlag();
      }
    }, 8000);

    const initAuth = async () => {
      if (isRedirectPending()) {
        try {
          const resultUser = await checkRedirectResult();
          if (!resultUser) {
            addLog('initAuth: Redirect checked but no user found. Stopping loading.', 'warn');
            if (isMounted) setAuthLoading(false);
          }
        } catch {
          addLog('initAuth: Redirect check error.', 'error');
          if (isMounted) setAuthLoading(false);
        }
      }
    };

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!isMounted) return;

      if (currentUser) {
        addLog(`Auth User: ${currentUser.email}`, 'success');
        setUser(currentUser);
        setAuthLoading(false);
        clearTimeout(safetyTimer);
        clearRedirectFlag();
      } else {
        addLog('Auth: No user session found.');
        setUser(null);
        if (!isRedirectPending()) setAuthLoading(false);
      }
    });

    initAuth();

    return () => {
      isMounted = false;
      clearTimeout(safetyTimer);
      unsubscribe();
    };
  }, []);

  // 3. Subscribe to month+group data whenever either changes
  useEffect(() => {
    // Reset local view to empty skeleton so UI matches the new month+group
    // while we wait for Firestore to stream in real data.
    setMonthSettings(createEmptyMonthlySettings(currentMonthKey, currentGroup));
    setMonthEntries([]);

    if (!isFirebaseEnabled() || !user) {
      setDataLoading(false);
      return;
    }

    setDataLoading(true);
    let gotSettings = false;
    let gotEntries = false;

    const markReady = () => {
      if (gotSettings && gotEntries) setDataLoading(false);
    };

    const unsubSettings = subscribeMonthSettings(
      currentMonthKey,
      currentGroup,
      (remote) => {
        isRemoteUpdate.current = true;
        if (remote) setMonthSettings(remote);
        else setMonthSettings(createEmptyMonthlySettings(currentMonthKey, currentGroup));
        isRemoteUpdate.current = false;
        gotSettings = true;
        markReady();
      },
      (err) => {
        addLog(`Settings sync error: ${err.message}`, 'error');
        gotSettings = true;
        markReady();
      }
    );

    const unsubEntries = subscribeMonthEntries(
      currentMonthKey,
      currentGroup,
      (list) => {
        setMonthEntries(list);
        gotEntries = true;
        markReady();
      },
      (err) => {
        addLog(`Entries sync error: ${err.message}`, 'error');
        gotEntries = true;
        markReady();
      }
    );

    return () => {
      unsubSettings();
      unsubEntries();
    };
  }, [user, currentMonthKey, currentGroup]);

  const handleLogin = async () => {
    setLoginLoading(true);
    try {
      await loginWithGoogle();
    } catch (error: any) {
      setLoginLoading(false);
      handleAuthError(error);
    }
  };

  const handleLogout = async () => {
    if (window.confirm('確定要登出嗎？')) {
      await logout();
      setDataLoading(true);
    }
  };

  // Settings save
  const handleSaveSettings = async (newSettings: MonthlySettings) => {
    const before = monthSettings;
    setMonthSettings(newSettings); // optimistic
    if (isFirebaseReady && !isRemoteUpdate.current && user) {
      try {
        await saveMonthSettings(newSettings, user.email);
        // audit: write one entry per kind of change detected
        const diffs = diffSettingsAudits(before, newSettings);
        for (const d of diffs) {
          await writeAuditLog({
            user: { email: user.email, displayName: user.displayName },
            group: newSettings.group,
            monthKey: newSettings.monthKey,
            action: d.action,
            target: {},
            before: d.before,
            after: d.after,
            extra: d.extra,
          });
        }
      } catch (e: any) {
        addLog(`saveMonthSettings failed: ${e.message}`, 'error');
        alert('同步失敗，請稍後重試');
      }
    }
  };

  // Per-entry add/update
  const handleSaveLeaveEntry = async (entry: MonthlyLeaveEntry) => {
    // Optimistic local update: append new entry (member can have multiple entries per month)
    setMonthEntries((prev) => [...prev, entry]);
    if (isFirebaseReady && user) {
      try {
        await saveLeaveEntry(entry, user.email);
        await writeAuditLog({
          user: { email: user.email, displayName: user.displayName },
          group: entry.group,
          monthKey: entry.monthKey,
          action: 'ADD_LEAVE',
          target: { date: entry.date, memberName: entry.memberName },
          before: null,
          after: entry,
          extra: `${entry.category}${entry.order}`,
        });
      } catch (e: any) {
        addLog(`saveLeaveEntry failed: ${e.message}`, 'error');
        alert('儲存假單失敗');
      }
    }
  };

  // Per-entry delete
  const handleDeleteLeaveEntry = async (memberName: string, date: string, order: number) => {
    const prevEntry = monthEntries.find(
      (e) => e.memberName === memberName && e.date === date && e.order === order
    );
    // Optimistic: remove target and reorder member entries locally
    setMonthEntries((prev) => {
      const removed = prev.filter(
        (e) => !(e.memberName === memberName && e.date === date && e.order === order)
      );
      return removed.map((e) =>
        e.memberName === memberName && e.order > order ? { ...e, order: e.order - 1 } : e
      );
    });
    if (isFirebaseReady && user) {
      try {
        const allMemberEntries = monthEntries.filter((e) => e.memberName === memberName);
        await deleteLeaveEntry(currentMonthKey, currentGroup, memberName, date, order, allMemberEntries, user.email);
        await writeAuditLog({
          user: { email: user.email, displayName: user.displayName },
          group: currentGroup,
          monthKey: currentMonthKey,
          action: 'REMOVE_LEAVE',
          target: { date, memberName },
          before: prevEntry ?? null,
          after: null,
        });
      } catch (e: any) {
        addLog(`deleteLeaveEntry failed: ${e.message}`, 'error');
        alert('刪除假單失敗');
      }
    }
  };

  // Month navigation (preserves data of other months — each month has its own doc)
  const handleChangeMonth = (newKey: string) => {
    setCurrentMonthKey(newKey);
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50 flex-col gap-4 fixed inset-0 z-[9999]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-primary"></div>
        <div className="text-slate-600 font-medium text-sm animate-pulse">系統載入中...</div>
        <div
          className="fixed bottom-0 left-0 w-full h-10 opacity-0 z-50"
          onClick={() => setShowDebug((p) => !p)}
        ></div>
        <DebugConsole isVisible={showDebug} onClose={() => setShowDebug(false)} />
      </div>
    );
  }

  if (isFirebaseReady && !user) {
    return (
      <>
        <LoginPage
          onLogin={handleLogin}
          loading={loginLoading}
          onShowDebug={() => setShowDebug(true)}
        />
        <DebugConsole isVisible={showDebug} onClose={() => setShowDebug(false)} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar
        currentPage={page}
        onNavigate={setPage}
        isFirebaseConnected={isFirebaseReady}
        user={user}
        onLogout={handleLogout}
        currentGroup={currentGroup}
        onGroupChange={setCurrentGroup}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!isFirebaseReady && (
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r shadow-sm">
            <p className="text-sm text-yellow-700">目前使用 <strong>本機模式</strong>。</p>
          </div>
        )}

        <ErrorBoundary onShowDebug={() => setShowDebug(true)}>
          {page === 'history' ? (
            <HistoryPage />
          ) : dataLoading ? (
            <div className="flex justify-center py-10">
              <div className="animate-spin h-8 w-8 border-b-2 border-primary rounded-full"></div>
            </div>
          ) : (
            <>
              {page === 'settings' && (
                <SettingsPage
                  settings={monthSettings}
                  currentMonthKey={currentMonthKey}
                  onSaveSettings={handleSaveSettings}
                  onChangeMonth={handleChangeMonth}
                />
              )}
              {page === 'filling' && (
                <FillingPage
                  settings={monthSettings}
                  entries={monthEntries}
                  currentMonthKey={currentMonthKey}
                  onSaveEntry={handleSaveLeaveEntry}
                  onDeleteEntry={handleDeleteLeaveEntry}
                />
              )}
            </>
          )}
        </ErrorBoundary>
      </main>

      <DebugConsole isVisible={showDebug} onClose={() => setShowDebug(false)} />
    </div>
  );
};

export default App;
