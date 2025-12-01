import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import LoginPage from './components/LoginPage';
import DebugConsole from './components/DebugConsole';
import { AppSettings, LeaveEntry, AppState, PageView, GroupType } from './types';
import { STORAGE_KEY } from './constants';
import { 
  isFirebaseEnabled, 
  subscribeToData, 
  saveDataToFirebase, 
  auth, 
  loginWithGoogle, 
  logout, 
  checkRedirectResult,
  isRedirectPending,
  clearRedirectFlag 
} from './firebase';
import { User } from 'firebase/auth';
import { addLog } from './logger';

const DEFAULT_SETTINGS: AppSettings = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  firstWorkDayA: '',
  membersA: [],
  dailyQuotasA: {},
  firstWorkDayB: '',
  membersB: [],
  dailyQuotasB: {},
};

const App: React.FC = () => {
  const [page, setPage] = useState<PageView>('filling');
  const [currentGroup, setCurrentGroup] = useState<GroupType>('A');
  
  const [data, setData] = useState<AppState>({
    settings: DEFAULT_SETTINGS,
    leaves: []
  });
  
  // Auth State
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);

  // Data Loading State
  const [dataLoading, setDataLoading] = useState(true);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  
  // Debug Console State
  const [showDebug, setShowDebug] = useState(false);
  
  // Ref to prevent saving loop when receiving updates from Firebase
  const isRemoteUpdate = useRef(false);

  // 1. Initialize Firebase availability check
  useEffect(() => {
    setIsFirebaseReady(isFirebaseEnabled());
    addLog("App Mounted. Firebase Enabled: " + isFirebaseEnabled());
  }, []);

  // Common Error Handler for Auth
  const handleAuthError = (error: any) => {
      console.error("Auth Error:", error);
      
      let msg = "登入失敗，請重試。";
      if (error.code === 'auth/popup-closed-by-user') {
        msg = "登入視窗已被關閉。";
      } else if (error.code === 'auth/unauthorized-domain') {
        msg = `網域未授權 (${window.location.hostname})。`;
      } else if (error.message) {
        msg = error.message;
      }
      alert(msg);
  };

  // 2. Auth Initialization & Redirect Handling
  useEffect(() => {
    let isMounted = true;
    let safetyTimer: NodeJS.Timeout;

    if (!isFirebaseEnabled() || !auth) {
      setAuthLoading(false);
      return;
    }

    // Safety: Force stop loading after 8s if Firebase hangs
    safetyTimer = setTimeout(() => {
      if (isMounted && authLoading) {
        addLog("Safety Timer Triggered (8s). Clearing loading state.", 'error');
        setAuthLoading(false);
        clearRedirectFlag();
      }
    }, 8000);

    const initAuth = async () => {
      // Check if we are coming back from a fallback redirect
      if (isRedirectPending()) {
        try {
          // guarantees flag cleanup internally
          const resultUser = await checkRedirectResult();
          
          if (!resultUser) {
            // Redirect failed or cancelled
            addLog("initAuth: Redirect checked but no user found. Stopping loading.", 'warn');
            if (isMounted) setAuthLoading(false);
          }
          // If resultUser exists, onAuthStateChanged handles it
        } catch (_error) {
          addLog("initAuth: Redirect check error.", 'error');
          if (isMounted) setAuthLoading(false);
        }
      }
    };

    // Listen for Auth State Changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!isMounted) return;

      if (currentUser) {
        addLog(`Auth User: ${currentUser.email}`, 'success');
        setUser(currentUser);
        setAuthLoading(false);
        clearTimeout(safetyTimer);
        clearRedirectFlag(); 
      } else {
        addLog("Auth: No user session found.");
        setUser(null);
        
        // Only stop loading if we are NOT waiting for a redirect check
        if (!isRedirectPending()) {
           setAuthLoading(false);
        }
      }
    });

    // Run the Redirect Check logic (for fallback recovery)
    initAuth();

    return () => {
      isMounted = false;
      clearTimeout(safetyTimer);
      unsubscribe();
    };
  }, []);

  const migrateData = (rawData: any): AppState => {
    const settings = { ...DEFAULT_SETTINGS, ...rawData.settings };
    
    // Migration: If legacy 'members' exist but 'membersA' is empty, move them to A (default)
    if (settings.members && settings.members.length > 0 && settings.membersA.length === 0) {
      settings.membersA = [...settings.members];
      delete settings.members;
    }
    // Migration: If legacy 'firstWorkDay' exists, move to A
    if (settings.firstWorkDay && !settings.firstWorkDayA) {
      settings.firstWorkDayA = settings.firstWorkDay;
      delete settings.firstWorkDay;
    }
    // Migration: If legacy 'dailyQuotas' exists, move to A
    if (settings.dailyQuotas && Object.keys(settings.dailyQuotas).length > 0 && Object.keys(settings.dailyQuotasA).length === 0) {
      settings.dailyQuotasA = { ...settings.dailyQuotas };
      delete settings.dailyQuotas;
    }

    return {
      settings,
      leaves: rawData.leaves || []
    };
  };

  // 3. Data Subscription
  useEffect(() => {
    if (isFirebaseEnabled() && user) {
      const unsubscribe = subscribeToData(
        (remoteData) => {
          if (remoteData) {
            isRemoteUpdate.current = true;
            setData(migrateData(remoteData));
            localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteData));
            setTimeout(() => { isRemoteUpdate.current = false; }, 100);
          } else {
            // First time upload or local data found
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
              try {
                const parsed = JSON.parse(stored);
                const initialData = migrateData(parsed);
                setData(initialData);
                saveDataToFirebase(initialData);
              } catch (e) { console.error(e); }
            }
          }
          setDataLoading(false);
        },
        (_error) => setDataLoading(false)
      );
      return () => unsubscribe();
    } else {
      // Local Mode
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setData(migrateData(parsed));
        } catch (e) { console.error(e); }
      }
      setDataLoading(false);
    }
  }, [user]);

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
    if (window.confirm("確定要登出嗎？")) {
      await logout();
      setDataLoading(true); 
    }
  };

  const handleSaveSettings = (newSettings: AppSettings) => {
    const newState = { ...data, settings: newSettings };
    setData(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    if (isFirebaseReady && !isRemoteUpdate.current && user) {
      saveDataToFirebase(newState).catch(_e => alert("同步失敗"));
    }
  };

  const handleSaveLeaves = (newLeaves: LeaveEntry[]) => {
    const newState = { ...data, leaves: newLeaves };
    setData(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    if (isFirebaseReady && !isRemoteUpdate.current && user) {
      saveDataToFirebase(newState).catch(_e => alert("同步失敗"));
    }
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50 flex-col gap-4 fixed inset-0 z-[9999]">
         <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-primary"></div>
         <div className="text-slate-600 font-medium text-sm animate-pulse">系統載入中...</div>
         <div 
            className="fixed bottom-0 left-0 w-full h-10 opacity-0 z-50" 
            onClick={() => setShowDebug(prev => !prev)}
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

        {dataLoading ? (
           <div className="flex justify-center py-10"><div className="animate-spin h-8 w-8 border-b-2 border-primary rounded-full"></div></div>
        ) : (
          <>
            {page === 'settings' && (
              <SettingsPage 
                settings={data.settings} 
                onSaveSettings={handleSaveSettings} 
                currentGroup={currentGroup}
              />
            )}
            {page === 'filling' && (
              <FillingPage 
                settings={data.settings} 
                savedLeaves={data.leaves} 
                onSaveLeaves={handleSaveLeaves} 
                currentGroup={currentGroup}
              />
            )}
          </>
        )}
      </main>

      <DebugConsole isVisible={showDebug} onClose={() => setShowDebug(false)} />
    </div>
  );
};

export default App;