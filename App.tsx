import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import { AppSettings, AppState, LeaveEntry, PageView } from './types';
import { supabase } from './supabase';

const DEFAULT_SETTINGS: AppSettings = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  firstWorkDay: '', // To be set by user
  members: [],
  dailyQuotas: {},
};

// Fixed ID for the singleton row in Supabase
const SCHEDULE_ID = 1;

const App: React.FC = () => {
  const [page, setPage] = useState<PageView>('settings');
  const [data, setData] = useState<AppState>({
    settings: DEFAULT_SETTINGS,
    leaves: []
  });
  const [loading, setLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  // 1. Fetch Initial Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: remoteData, error } = await supabase
          .from('schedules')
          .select('*')
          .eq('id', SCHEDULE_ID)
          .single();

        if (error) {
          // If code is PGRST116, it means no rows found (first time use)
          if (error.code === 'PGRST116') {
             // Will be created on first save
             setLoading(false);
             return;
          }
          throw error;
        }

        if (remoteData) {
          setData({
            settings: remoteData.settings || DEFAULT_SETTINGS,
            leaves: remoteData.leaves || []
          });
        }
      } catch (err: any) {
        console.error("Supabase fetch error:", err);
        setConnectionError("無法連接至資料庫，請檢查 .env 設定或網路連線。");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 2. Subscribe to Realtime Changes
  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'schedules',
          filter: `id=eq.${SCHEDULE_ID}`,
        },
        (payload) => {
          // Receive update from other devices
          const newData = payload.new;
          if (newData) {
            setData({
              settings: newData.settings,
              leaves: newData.leaves
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // 3. Save Logic
  const saveData = async (newData: AppState) => {
    setIsSyncing(true);
    try {
      // Optimistic update
      setData(newData);

      const { error } = await supabase
        .from('schedules')
        .upsert({ 
          id: SCHEDULE_ID,
          settings: newData.settings,
          leaves: newData.leaves
        });

      if (error) throw error;
    } catch (err) {
      console.error("Save error:", err);
      alert("儲存失敗，請檢查網路連線");
    } finally {
      setIsSyncing(false);
    }
  };

  const handleSaveSettings = (newSettings: AppSettings) => {
    saveData({
      ...data,
      settings: newSettings
    });
  };

  const handleSaveLeaves = (newLeaves: LeaveEntry[]) => {
    saveData({
      ...data,
      leaves: newLeaves
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-600">正在同步雲端資料...</p>
        </div>
      </div>
    );
  }

  if (connectionError) {
     return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-red-500">
          <h2 className="text-xl font-bold text-red-600 mb-2">連線錯誤</h2>
          <p className="text-slate-700 mb-4">{connectionError}</p>
          <div className="text-sm text-slate-500 text-left bg-slate-100 p-4 rounded overflow-auto">
            <p className="mb-2 font-bold">請確認以下事項：</p>
            <ul className="list-disc pl-5 space-y-1">
               <li>已建立 .env 檔案並填入 URL 與 KEY</li>
               <li>Supabase 資料庫已建立 'schedules' 資料表</li>
               <li>Supabase 已關閉 RLS 或設定允許寫入</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar currentPage={page} onNavigate={setPage} />
      
      {isSyncing && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg z-50 flex items-center opacity-80">
          <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
          同步中...
        </div>
      )}

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
          <p>© {new Date().getFullYear()} ShiftScheduler Team Manager. 資料已啟用 Supabase 雲端同步。</p>
        </div>
      </footer>
    </div>
  );
};

export default App;