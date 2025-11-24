import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import { AppSettings, AppState, LeaveEntry, PageView } from './types';
import { db } from './firebase';

const DEFAULT_SETTINGS: AppSettings = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  firstWorkDay: '', // To be set by user
  members: [],
  dailyQuotas: {},
};

const App: React.FC = () => {
  const [page, setPage] = useState<PageView>('settings');
  const [data, setData] = useState<AppState>({
    settings: DEFAULT_SETTINGS,
    leaves: []
  });

  // Load from Firebase on mount (Realtime Listener)
  useEffect(() => {
    const settingsRef = db.ref('settings');
    const leavesRef = db.ref('leaves');

    // Listen for settings changes
    const onSettingsChange = settingsRef.on('value', (snapshot) => {
      const val = snapshot.val();
      if (val) {
        setData(prev => ({ ...prev, settings: val }));
      }
    });

    // Listen for leaves changes
    const onLeavesChange = leavesRef.on('value', (snapshot) => {
      const val = snapshot.val();
      if (val) {
        // Firebase might return an object if indices are keys, ensure array
        const leavesArray = Array.isArray(val) ? val : Object.values(val);
        setData(prev => ({ ...prev, leaves: leavesArray as LeaveEntry[] }));
      } else {
        setData(prev => ({ ...prev, leaves: [] }));
      }
    });

    return () => {
      settingsRef.off('value', onSettingsChange);
      leavesRef.off('value', onLeavesChange);
    };
  }, []);

  const handleSaveSettings = (newSettings: AppSettings) => {
    db.ref('settings').set(newSettings)
      .then(() => console.log("設定儲存成功"))
      .catch(err => console.error("設定儲存失敗", err));
  };

  const handleSaveLeaves = (newLeaves: LeaveEntry[]) => {
    db.ref('leaves').set(newLeaves)
      .then(() => {
        console.log("資料寫入成功");
      })
      .catch(err => console.error("資料寫入失敗", err));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar currentPage={page} onNavigate={setPage} />
      
      <main>
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
          <p>© {new Date().getFullYear()} ShiftScheduler Team Manager. 資料儲存於 Firebase Realtime Database。</p>
        </div>
      </footer>
    </div>
  );
};

export default App;