import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Import the singleton db instance
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import { AppSettings, LeaveEntry, AppState, PageView } from './types';

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

  // Load from Firebase on mount
  useEffect(() => {
    setLoading(true);
    const settingsRef = db.ref('settings');
    const leavesRef = db.ref('leaves');

    // 1. Listen to Settings
    const handleSettings = (snapshot: any) => {
      const val = snapshot.val();
      if (val) {
        // Ensure defaults if fields are missing in DB
        const loadedSettings: AppSettings = {
            ...DEFAULT_SETTINGS, 
            ...val,
            // Ensure dailyQuotas is an object even if empty
            dailyQuotas: val.dailyQuotas || {}
        };
        setData(prev => ({ ...prev, settings: loadedSettings }));
      }
      setLoading(false);
    };

    // 2. Listen to Leaves
    const handleLeaves = (snapshot: any) => {
      const val = snapshot.val();
      if (val) {
        // RTDB stores arrays as objects with numeric keys if sparse, or arrays. 
        // Convert whatever we get into an array.
        const leavesArray = Array.isArray(val) ? val : Object.values(val);
        const validLeaves = leavesArray.filter((entry: any) => entry && entry.id) as LeaveEntry[];
        setData(prev => ({ ...prev, leaves: validLeaves }));
      } else {
        setData(prev => ({ ...prev, leaves: [] }));
      }
    };

    settingsRef.on('value', handleSettings);
    leavesRef.on('value', handleLeaves);

    return () => {
      settingsRef.off('value', handleSettings);
      leavesRef.off('value', handleLeaves);
    };
  }, []);

  const handleSaveSettings = (newSettings: AppSettings) => {
    // Optimistic update
    setData(prev => ({ ...prev, settings: newSettings }));
    
    // Write to Firebase
    db.ref('settings').set(newSettings)
      .then(() => console.log("設定儲存成功"))
      .catch((err: any) => console.error("設定儲存失敗", err));
  };

  const handleSaveLeaves = (newLeaves: LeaveEntry[]) => {
    // Optimistic update
    setData(prev => ({ ...prev, leaves: newLeaves }));
    
    // Write to Firebase
    db.ref('leaves').set(newLeaves)
      .then(() => {
        console.log("資料寫入成功");
      })
      .catch((err: any) => console.error("資料寫入失敗", err));
  };

  if (loading && !data.settings.year) {
      // Show simple loading state on first load
      return (
          <div className="flex items-center justify-center h-screen bg-slate-50">
             <div className="text-slate-500">載入資料中...</div>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar currentPage={page} onNavigate={setPage} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {page === 'settings' && (
          <SettingsPage 
            settings={data.settings} 
            rtdb={db}
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
          <p>© {new Date().getFullYear()} 團隊假表管理系統 | Powered by Firebase</p>
        </div>
      </footer>
    </div>
  );
};

export default App;