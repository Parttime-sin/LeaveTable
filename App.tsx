import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import { AppSettings, LeaveEntry, AppState, PageView } from './types';
import { STORAGE_KEY } from './constants';
import { isFirebaseEnabled, subscribeToData, saveDataToFirebase } from './firebase';

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
  const [loading, setLoading] = useState(true);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  
  // Ref to prevent saving loop when receiving updates from Firebase
  const isRemoteUpdate = useRef(false);

  useEffect(() => {
    const firebaseEnabled = isFirebaseEnabled();
    setIsFirebaseReady(firebaseEnabled);

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
            } else {
              setLoading(false); // No data anywhere, just stop loading
            }
          }
          setLoading(false);
        },
        (error) => {
          console.error("Firebase subscription error, falling back to local", error);
          setLoading(false);
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
      setLoading(false);
    }
  }, []);

  const saveData = async (newData: AppState) => {
    setData(newData);
    
    // Always save to LocalStorage as backup
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));

    // If Firebase is active and this is NOT a remote update, push to cloud
    if (isFirebaseReady && !isRemoteUpdate.current) {
      try {
        await saveDataToFirebase(newData);
        console.log("Data synced to Firebase");
      } catch (e) {
        console.error("Failed to sync to Firebase", e);
        alert("無法同步至雲端，資料僅儲存於本機。");
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

  if (loading) {
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
            {isFirebaseReady ? 'Cloud Mode (Firebase)' : 'Local Mode (Browser Storage)'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;