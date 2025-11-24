import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import { AppSettings, AppState, LeaveEntry, PageView } from './types';
import { supabase } from './supabase';

const DEFAULT_SETTINGS: AppSettings = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  firstWorkDay: '', 
  members: [],
  dailyQuotas: {},
};

// Fixed ID for the singleton row in Supabase (for settings)
const SCHEDULE_ID = 1;

const App: React.FC = () => {
  const [page, setPage] = useState<PageView>('settings');
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [leaves, setLeaves] = useState<LeaveEntry[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  // 1. Fetch Initial Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch Settings
        const { data: scheduleData, error: scheduleError } = await supabase
          .from('schedules')
          .select('settings')
          .eq('id', SCHEDULE_ID)
          .single();

        if (scheduleError && scheduleError.code !== 'PGRST116') {
          throw scheduleError;
        }

        if (scheduleData?.settings) {
          setSettings(scheduleData.settings);
        }

        // Fetch Leaves
        const { data: leavesData, error: leavesError } = await supabase
          .from('leaves')
          .select('*');

        if (leavesError) throw leavesError;

        if (leavesData) {
          setLeaves(leavesData);
        }

      } catch (err: any) {
        console.error("Supabase fetch error:", err);
        setConnectionError("無法連接至資料庫，請檢查 .env 設定以及是否已建立 schedules 與 leaves 資料表。");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 2. Subscribe to Realtime Changes
  useEffect(() => {
    // Listen to Settings changes
    const settingsChannel = supabase
      .channel('public:schedules')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'schedules',
          filter: `id=eq.${SCHEDULE_ID}`,
        },
        (payload) => {
          if (payload.new && payload.new.settings) {
            setSettings(payload.new.settings);
          }
        }
      )
      .subscribe();

    // Listen to Leaves changes (Insert/Update/Delete)
    const leavesChannel = supabase
      .channel('public:leaves')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'leaves' },
        (payload) => {
          // Refresh leaves simply by re-fetching or manipulating state based on event
          // For simplicity and correctness, we handle state updates:
          if (payload.eventType === 'INSERT') {
            setLeaves(prev => [...prev, payload.new as LeaveEntry]);
          } else if (payload.eventType === 'DELETE') {
            setLeaves(prev => prev.filter(l => l.id !== payload.old.id));
          } else if (payload.eventType === 'UPDATE') {
            setLeaves(prev => prev.map(l => l.id === payload.new.id ? payload.new as LeaveEntry : l));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(settingsChannel);
      supabase.removeChannel(leavesChannel);
    };
  }, []);

  // 3. Actions

  // Save Settings (Upsert to schedules table)
  const handleSaveSettings = async (newSettings: AppSettings) => {
    setIsSyncing(true);
    // Optimistic update
    setSettings(newSettings);
    
    try {
      const { error } = await supabase
        .from('schedules')
        .upsert({ 
          id: SCHEDULE_ID,
          settings: newSettings
        });

      if (error) throw error;
    } catch (err) {
      console.error("Save settings error:", err);
      alert("設定儲存失敗");
    } finally {
      setIsSyncing(false);
    }
  };

  // Add Leave (Insert to leaves table)
  const handleAddLeave = async (leave: LeaveEntry) => {
    setIsSyncing(true);
    // Optimistic
    setLeaves(prev => [...prev, leave]);

    try {
      const { error } = await supabase
        .from('leaves')
        .insert(leave);
      
      if (error) {
        // Rollback on error
        setLeaves(prev => prev.filter(l => l.id !== leave.id));
        throw error;
      }
    } catch (err) {
      console.error("Add leave error:", err);
      alert("新增假單失敗");
    } finally {
      setIsSyncing(false);
    }
  };

  // Remove Leave (Delete from leaves table)
  const handleRemoveLeave = async (leaveId: string) => {
    setIsSyncing(true);
    // Store for rollback
    const backup = leaves.find(l => l.id === leaveId);
    // Optimistic
    setLeaves(prev => prev.filter(l => l.id !== leaveId));

    try {
      const { error } = await supabase
        .from('leaves')
        .delete()
        .eq('id', leaveId);

      if (error) {
        if (backup) setLeaves(prev => [...prev, backup]);
        throw error;
      }
    } catch (err) {
      console.error("Remove leave error:", err);
      alert("刪除假單失敗");
    } finally {
      setIsSyncing(false);
    }
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
        <div className="max-w-2xl bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-red-500">
          <h2 className="text-xl font-bold text-red-600 mb-2">資料庫連線錯誤</h2>
          <p className="text-slate-700 mb-6">{connectionError}</p>
          
          <div className="text-sm text-slate-600 text-left bg-slate-100 p-6 rounded border border-slate-200">
            <h3 className="font-bold mb-3 text-slate-800">請前往 Supabase SQL Editor 執行以下指令以建立所需資料表：</h3>
            <pre className="bg-slate-800 text-green-400 p-4 rounded overflow-x-auto font-mono text-xs">
{`-- 1. 建立設定表
create table if not exists schedules (
  id bigint primary key,
  settings jsonb
);

-- 2. 建立假單表
create table if not exists leaves (
  id text primary key,
  date text not null,
  member_name text not null,
