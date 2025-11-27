import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import { AppSettings, LeaveEntry, AppState, PageView } from './types';
import { db } from './firebase';
import { ref, onValue, set } from 'firebase/database';

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

  // Initialize Firebase Listeners
  useEffect(() => {
    setLoading(true);
    const settingsRef = ref(db, 'settings');
    const leavesRef = ref(db, 'leaves');

    // Listener for Settings updates
    const unsubscribeSettings = onValue(settingsRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        setData(prev => ({ ...prev, settings: { ...DEFAULT_SETTINGS, ...val } }));
      }
    });

    // Listener for Leaves updates
    const unsubscribeLeaves = onValue(leavesRef, (snapshot) => {
      const val = snapshot.val();
      // Handle both array and object formats from Firebase
      const leavesData = val ? (Array.isArray(val) ? val : Object.values(val)) : [];
      setData(prev => ({ ...prev, leaves: leavesData as LeaveEntry[] }));
      setLoading(false);
    });

    return () => {
      unsubscribeSettings();
      unsubscribeLeaves();
    };
  }, []);

  const handleSaveSettings = (newSettings: AppSettings) => {
    // Write settings to Firebase
    set(ref(db, 'settings'), newSettings)
      .then(() => console.log("設定已儲存至 Firebase"))
      .catch((err) => console.error("設定儲存失敗", err));
  };

  const handleSaveLeaves = (newLeaves: LeaveEntry[]) => {
    // Write leaves to Firebase
    set(ref(db, 'leaves'), newLeaves)
      .then(() => {
        console.log("資料寫入成功");
        // Note: The form inputs in FillingPage are cleared upon adding to the list.
        // The list itself is synchronized with Firebase via onValue above.
      })
      .catch((err) => console.error("資料寫入失敗", err));
  };

  if (loading) {
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
        </div>
      </footer>
    </div>
  );
};

export default App;