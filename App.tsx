import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import LoginPage from './components/LoginPage';
import { AppSettings, LeaveEntry, AppState, PageView } from './types';
import { STORAGE_KEY } from './constants';
import { isFirebaseEnabled, subscribeToData, saveDataToFirebase, auth, loginWithGoogle, logout, checkRedirectResult } from './firebase';
import { User } from 'firebase/auth';

const DEFAULT_SETTINGS: AppSettings = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  firstWorkDay: '', 
  members: [],
  dailyQuotas: {},
};

const App: React.FC = () => {
  const [page, setPage] = useState<PageView>('settings');
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
  
  // Ref to prevent saving loop when receiving updates from Firebase
  const isRemoteUpdate = useRef(false);

  // 1. Initialize Firebase availability check
  useEffect(() => {
    setIsFirebaseReady(isFirebaseEnabled());
  }, []);

  // 2. Auth Listener
  useEffect(() => {
    if (isFirebaseEnabled() && auth) {
      const unsubscribe = auth.onAuthStateChanged((u) => {
        setUser(u);
        setAuthLoading(false);
      });
      return () => unsubscribe();
    } else {
      // Local mode or firebase not configured
      setAuthLoading(false);
    }
  }, []);

  // Common Error Handler for Auth
  const handleAuthError = (error: any) => {
      console.error("Auth Error:", error);
      let msg = "登入失敗，請重試。";
      
      if (error.code === 'auth/popup-closed-by-user') {
        msg = "登入視窗已被關閉，請再試一次。";
      } else if (error.code === 'auth/cancelled-popup-request') {
         msg = "已有一個登入視窗開啟中，請關閉後重試。";
      } else if (error.code === 'auth/unauthorized-domain') {
        msg = `網域未授權 (${window.location.hostname})。\n請至 Firebase Console > Authentication > Settings > Authorized Domains 新增此網域。`;
      } else if (error.code === 'auth/operation-not-allowed') {
        msg = "Google 登入功能尚未啟用。\n請至 Firebase Console > Authentication > Sign-in method 啟用 Google 提供者。";
      } else if (error.code === 'auth/api-key-not-valid') {
        msg = "API Key 設定錯誤，請檢查 .env 檔案。";
      } else if (error.message) {
        msg = `登入發生錯誤 (${error.code || 'unknown'}): ${error.message}`;
      }
      
      alert(msg);
  };

  // 3. Check for Redirect Result (for Mobile Login flows)
  useEffect(() => {
    if (isFirebaseEnabled()) {
      checkRedirectResult().catch(handleAuthError);
    }
  }, []);

  // 4. Data Subscription (Depends on Auth)
  useEffect(() => {
    const firebaseEnabled = isFirebaseEnabled();
    
    // If Firebase is enabled but user is not logged in, do not subscribe yet (wait for login)
    if (firebaseEnabled && !user) {
      return; 
    }

    if (firebaseEnabled) {
      // --- Firebase Mode ---
      console.log("Connecting to Firebase...");
      const unsubscribe = subscribeToData(
        (remoteData) => {
          if (remoteData) {
            console.log("Received data from Firebase");
            isRemoteUpdate.current = true;
            setData(remoteData);
            // Also sync to local storage as backup/cache
            localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteData));
            setTimeout(() => { isRemoteUpdate.current = false; }, 100);
          } else {
            // Document does not exist in Firebase yet.
            // Try to load from LocalStorage to initialize Firebase
            console.log("No data in Firebase, checking LocalStorage for initial upload...");
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
              try {
                const parsed = JSON.parse(stored);
                // Upload local data to Firebase to init the DB
                const initialData = {
                  settings: { ...DEFAULT_SETTINGS, ...parsed.settings },
                  leaves: parsed.leaves || []
                };
                setData(initialData);
                saveDataToFirebase(initialData);
              } catch (e) {
                console.error("Local storage parse error during migration", e);
              }
            }
          }
          setDataLoading(false);
        },
        (error) => {
          console.error("Firebase subscription error, falling back to local", error);
          setDataLoading(false);
        }
      );

      return () => unsubscribe();
    } else {
      // --- Local Storage Mode (Fallback) ---
      console.log("Firebase not configured. Using LocalStorage.");
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setData({
            settings: { ...DEFAULT_SETTINGS, ...parsed.settings },
            leaves: parsed.leaves || []
          });
        } catch (e) {
          console.error("Failed to parse local storage", e);
        }
      }
      setDataLoading(false);
    }
  }, [user]); // Re-run when user logs in

  const handleLogin = async () => {
    setLoginLoading(true);
    
    // Detect Mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    try {
      await loginWithGoogle(isMobile);
      // If mobile, it will redirect, and the code below won't strictly finish execution before unload.
      // If desktop, it waits for popup.
    } catch (error: any) {
      handleAuthError(error);
      setLoginLoading(false);
    } finally {
      // Only reset loading if we are NOT redirecting (Desktop)
      // If we are redirecting, the page will reload anyway, or if it failed immediately it was caught above
      if (!isMobile) {
         setLoginLoading(false);
      }
    }
  };

  const handleLogout = async () => {
    if (window.confirm("確定要登出嗎？")) {
      await logout();
      setDataLoading(true); // Reset loading for next login
    }
  };

  const saveData = async (newData: AppState) => {
    setData(newData);
    
    // Always save to LocalStorage as backup
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));

    // If Firebase is active and this is NOT a remote update, push to cloud
    if (isFirebaseReady && !isRemoteUpdate.current) {
      if (!user) {
        console.warn("User not logged in, cannot save to Firebase");
        return;
      }
      try {
        await saveDataToFirebase(newData);
        console.log("Data synced to Firebase");
      } catch (e) {
        console.error("Failed to sync to Firebase", e);
        alert("無法同步至雲端 (可能無寫入權限)。");
      }
    }
  };

  const handleSaveSettings = (newSettings: AppSettings) => {
    const newState = { ...data, settings: newSettings };
    saveData(newState);
  };

  const handleSaveLeaves = (newLeaves: LeaveEntry[]) => {
    const newState = { ...data, leaves: newLeaves };
    saveData(newState);
  };

  // 1. Show global loading if Auth is checking
  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50 flex-col gap-4">
         <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
         <div className="text-slate-500 text-sm">驗證身分中...</div>
      </div>
    );
  }

  // 2. If Firebase is enabled but NO user -> Login Page
  if (isFirebaseReady && !user) {
    return <LoginPage onLogin={handleLogin} loading={loginLoading} />;
  }

  // 3. Main App Loading (Data Fetching)
  if (dataLoading) {
      return (
          <div className="flex items-center justify-center h-screen bg-slate-50 flex-col gap-4">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
             <div className="text-slate-500">載入資料中...</div>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar 
        currentPage={page} 
        onNavigate={setPage} 
        isFirebaseConnected={isFirebaseReady}
        user={user}
        onLogout={handleLogout}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!isFirebaseReady && (
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  目前使用 <strong>本機模式</strong>。若需團隊共同編輯，請編輯程式碼中的 <code>firebase.ts</code> 檔案並填入您的 API 金鑰。
                </p>
              </div>
            </div>
          </div>
        )}

        {page === 'settings' && (
          <SettingsPage 
            settings={data.settings} 
            onSaveSettings={handleSaveSettings} 
          />
        )}
        {page === 'filling' && (
          <FillingPage 
            settings={data.settings} 
            savedLeaves={data.leaves}
            onSaveLeaves={handleSaveLeaves}
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} 團隊假表管理系統</p>
          <p className="mt-1 text-xs text-slate-400">
            {isFirebaseReady ? `Cloud Mode (Google Auth: ${user?.displayName || 'Unknown'})` : 'Local Mode (Browser Storage)'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;