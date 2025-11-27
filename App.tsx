import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import { AppSettings, LeaveEntry, AppState, PageView } from './types';
import { STORAGE_KEY } from './constants';

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

  // Initialize from LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Merge with defaults to ensure structure integrity
        setData({
          settings: { ...DEFAULT_SETTINGS, ...parsed.settings },
          leaves: parsed.leaves || []
        });
      } catch (e) {
        console.error("Failed to parse local storage", e);
      }
    }
    setLoading(false);
  }, []);

  const saveData = (newData: AppState) => {
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  };

  const handleSaveSettings = (newSettings: AppSettings) => {
    const newState = { ...data, settings: newSettings };
    saveData(newState);
    console.log("設定已儲存至 LocalStorage");
  };

  const handleSaveLeaves = (newLeaves: LeaveEntry[]) => {
    const newState = { ...data, leaves: newLeaves };
    saveData(newState);
    console.log("資料寫入成功 (LocalStorage)");
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