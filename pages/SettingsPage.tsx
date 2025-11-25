import React, { useState, useEffect } from 'react';
import { Users, Calendar, AlertTriangle, Plus, Trash2, ArrowLeft, ArrowRight, CheckCircle2, Sliders, Eraser, Save, Activity, Wifi, Loader2 } from 'lucide-react';
import { AppSettings } from '../types';

// --- Local Date Helpers ---
const startOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);
const endOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
const eachDayOfInterval = ({ start, end }: { start: Date, end: Date }) => {
  const days: Date[] = [];
  const curr = new Date(start);
  while (curr <= end) {
    days.push(new Date(curr));
    curr.setDate(curr.getDate() + 1);
  }
  return days;
};
const format = (date: Date, fmt: string) => {
  if (fmt === 'yyyy-MM-dd') {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
  if (fmt === 'd') return String(date.getDate());
  return '';
};
const getDay = (date: Date) => date.getDay();
const parseISO = (str: string) => {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const differenceInCalendarDays = (dateLeft: Date, dateRight: Date) => {
  const utcA = Date.UTC(dateLeft.getFullYear(), dateLeft.getMonth(), dateLeft.getDate());
  const utcB = Date.UTC(dateRight.getFullYear(), dateRight.getMonth(), dateRight.getDate());
  return Math.floor((utcA - utcB) / (1000 * 60 * 60 * 24));
};
const addMonths = (date: Date, amount: number) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + amount);
  return d;
};
const subMonths = (date: Date, amount: number) => addMonths(date, -amount);
const addDays = (date: Date, amount: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + amount);
  return d;
};

// --- SettingsPage Component ---

interface SettingsPageProps {
  settings: AppSettings;
  rtdb: any; // Realtime Database instance
  onSaveSettings: (newSettings: AppSettings) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ settings, rtdb, onSaveSettings }) => {
  const [localSettings, setLocalSettings] = useState<AppSettings>(settings);
  const [newMemberName, setNewMemberName] = useState('');
  
  // Bulk settings state
  const [bulkQuotaValue, setBulkQuotaValue] = useState<string>('2');

  // Single Day Edit State
  const [editingDate, setEditingDate] = useState<string | null>(null);
  const [singleQuotaValue, setSingleQuotaValue] = useState<string>('');

  // Test Connection State
  const [testLastPing, setTestLastPing] = useState<string>('等待測試...');
  const [isTesting, setIsTesting] = useState(false);

  // Sync props to local state when props change (e.g. initial load from DB)
  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  // Listen for test connection changes (Legacy/v8 RTDB)
  useEffect(() => {
    if (!rtdb) return;

    const testRef = rtdb.ref('_connection_test');
    
    const onTestChange = (snapshot: any) => {
      const val = snapshot.val();
      if (val && val.timestamp) {
        setTestLastPing(new Date(val.timestamp).toLocaleString());
      }
    };

    testRef.on('value', onTestChange);
    return () => testRef.off('value', onTestChange);
  }, [rtdb]);

  // Test Connection Handler
  const handleTestConnection = async () => {
    if (!rtdb) {
      setTestLastPing('Firebase 尚未初始化');
      return;
    }

    setIsTesting(true);
    const testRef = rtdb.ref('_connection_test');
    
    try {
      await testRef.set({
        timestamp: Date.now(),
        message: 'Hello Firebase!',
      });
      setTimeout(() => setIsTesting(false), 500);
    } catch (err) {
      console.error("Firebase RTDB Test Connection Error:", err);
      setTestLastPing('連線失敗，請檢查 Console');
      setIsTesting(false);
    }
  };

  const handleMonthChange = (increment: number) => {
    const currentDate = new Date(localSettings.year, localSettings.month);
    const newDate = increment > 0 ? addMonths(currentDate, 1) : subMonths(currentDate, 1);
    
    const newSettings = {
      ...localSettings,
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
      dailyQuotas: {} 
    };
    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
  };

  const handleAddMember = () => {
    if (newMemberName.trim() && !localSettings.members.includes(newMemberName.trim())) {
      const newSettings = {
        ...localSettings,
        members: [...localSettings.members, newMemberName.trim()]
      };
      setLocalSettings(newSettings);
      onSaveSettings(newSettings);
      setNewMemberName('');
    }
  };

  const handleRemoveMember = (name: string) => {
    const newSettings = {
      ...localSettings,
      members: localSettings.members.filter(m => m !== name)
    };
    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
  };

  const handleSetPattern = (day: 1 | 2) => {
    const currentMonthStart = startOfMonth(new Date(localSettings.year, localSettings.month));
    const targetDate = day === 1 ? currentMonthStart : addDays(currentMonthStart, 1);
    const dateStr = format(targetDate, 'yyyy-MM-dd');
    
    const newSettings = {
      ...localSettings,
      firstWorkDay: dateStr,
      dailyQuotas: {}
    };
    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
  };

  const isWorkDay = (date: Date) => {
    if (!localSettings.firstWorkDay) return true;
    const firstWork = parseISO(localSettings.firstWorkDay);
    const diff = differenceInCalendarDays(date, firstWork);
    return diff % 2 === 0;
  };

  const monthStart = startOfMonth(new Date(localSettings.year, localSettings.month));
  const monthEnd = endOfMonth(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleBulkSet = (quota: number) => {
    if (!localSettings.firstWorkDay) return;

    const newQuotas = { ...localSettings.dailyQuotas };
    
    daysInMonth.forEach(day => {
      if (isWorkDay(day)) {
        const dateStr = format(day, 'yyyy-MM-dd');
        if (quota === 0) {
          delete newQuotas[dateStr];
        } else {
          newQuotas[dateStr] = quota;
        }
      }
    });

    const newSettings = {
      ...localSettings,
      dailyQuotas: newQuotas
    };
    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
  };

  const applyBulkQuota = () => {
    const val = parseFloat(bulkQuotaValue);
    if (!isNaN(val) && val >= 0) {
      handleBulkSet(val);
    }
  };

  const handleDayClick = (dateStr: string, currentQuota: number) => {
    setEditingDate(dateStr);
    setSingleQuotaValue(currentQuota > 0 ? currentQuota.toString() : '');
  };

  const saveSingleQuota = () => {
    if (!editingDate) return;
    
    const val = parseFloat(singleQuotaValue);
    const newQuotas = { ...localSettings.dailyQuotas };
    
    if (isNaN(val) || val === 0) {
      delete newQuotas[editingDate];
    } else {
      newQuotas[editingDate] = val;
    }

    const newSettings = { ...localSettings, dailyQuotas: newQuotas };
    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
    setEditingDate(null);
    setSingleQuotaValue('');
  };

  const hasSetting = !!localSettings.firstWorkDay;
  const activePattern = !hasSetting ? null : (isWorkDay(monthStart) ? 1 : 2);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Settings Controls */}
        <div className="space-y-6">
          
          {/* 1. Date & Work Day Setup */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              基本設定
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-md">
                <button onClick={() => handleMonthChange(-1)} className="p-1 hover:bg-slate-200 rounded">
                  <ArrowLeft className="w-5 h-5 text-slate-600" />
                </button>
                <span className="text-lg font-semibold text-slate-800">
                  {localSettings.year}年 {localSettings.month + 1}月
                </span>
                <button onClick={() => handleMonthChange(1)} className="p-1 hover:bg-slate-200 rounded">
                  <ArrowRight className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  當月首日上班日
                </label>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSetPattern(1)}
                    className={`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${
                      activePattern === 1
                        ? 'bg-blue-50 border-blue-600 text-blue-600' 
                        : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl font-bold">1號</span>
                    <span className="text-xs mt-1 opacity-80">基數日上班</span>
                    {activePattern === 1 && (
                      <div className="absolute top-2 right-2 text-blue-600">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </button>

                  <button
                    onClick={() => handleSetPattern(2)}
                    className={`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${
                      activePattern === 2
                        ? 'bg-blue-50 border-blue-600 text-blue-600' 
                        : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl font-bold">2號</span>
                    <span className="text-xs mt-1 opacity-80">偶數日上班</span>
                    {activePattern === 2 && (
                      <div className="absolute top-2 right-2 text-blue-600">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Team Members */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                團隊人員 ({localSettings.members.length})
              </h2>
            </div>
            
            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                placeholder="輸入姓名"
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddMember()}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50 border p-2 text-sm"
              />
              <button
                onClick={handleAddMember}
                disabled={!newMemberName.trim()}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:opacity-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto space-y-2">
              {localSettings.members.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-4">暫無人員資料</p>
              )}
              {localSettings.members.map(member => (
                <div key={member} className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
                  <span className="text-gray-800 font-medium">{member}</span>
                  <button onClick={() => handleRemoveMember(member)} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Database Connection Test */}
          <div className="bg-white shadow rounded-lg p-6 border border-blue-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-blue-600" />
              系統連線測試
            </h2>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-600 flex items-center">
                  <Wifi className="w-4 h-4 mr-1" /> 資料庫回應
                </span>
                <button
                  onClick={handleTestConnection}
                  disabled={isTesting || !rtdb}
                  className="px-3 py-1 bg-white border border-slate-300 rounded text-xs hover:bg-slate-100 active:bg-slate-200 transition-colors disabled:opacity-50"
                >
                  {isTesting ? <Loader2 className="w-4 h-4 animate-spin inline-block mr-1" /> : '發送測試訊號'}
                </button>
              </div>
              <div className="text-xs text-slate-500 font-mono bg-white p-2 rounded border border-slate-200">
                最後接收: {testLastPing}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Quota Calendar */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                可休人數配額設定
              </h2>
            </div>

            {!localSettings.firstWorkDay ? (
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-amber-700">
                      請先在左側設定「當月首日上班日」以啟用配額設定功能。
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                  <Sliders className="w-4 h-4 mr-2 text-blue-600" />
                  批量配額設定
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 items-end sm:items-center">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">每日可休人數</label>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      value={bulkQuotaValue}
                      onChange={(e) => setBulkQuotaValue(e.target.value)}
                      className="block w-full w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50 text-sm p-2 border"
                      placeholder="例如: 2"
                    />
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={applyBulkQuota}
                      className="flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-colors"
                    >
                      套用至本月上班日
                    </button>
                    <button
                      onClick={() => handleBulkSet(0)}
                      className="flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none transition-colors"
                    >
                      <Eraser className="w-4 h-4 mr-1" />
                      清除
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex-1 min-h-[500px]">
              <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden h-full">
                {/* Headers */}
                {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
                  <div key={day} className="bg-gray-100 py-2 text-center text-sm font-semibold text-gray-700">
                    {day}
                  </div>
                ))}

                {/* Days */}
                {daysInMonth.map((day, dayIdx) => {
                  const dateStr = format(day, 'yyyy-MM-dd');
                  const workDay = isWorkDay(day);
                  const quota = localSettings.dailyQuotas[dateStr];
                  const isFraction = quota && !Number.isInteger(quota);
                  
                  // Style logic based on quota
                  let bgClass = "bg-white";
                  let hoverClass = "";
                  if (!workDay) {
                    bgClass = "bg-slate-100 cursor-not-allowed";
                  } else {
                    hoverClass = "cursor-pointer transition-colors";
                    if (isFraction) bgClass = "bg-yellow-50 hover:bg-yellow-100";
                    else if (quota && quota > 0) bgClass = "bg-green-50 hover:bg-green-100";
                    else bgClass = "bg-white hover:bg-gray-50";
                  }

                  const colStart = getDay(day);
                  const colSpanStyle = dayIdx === 0 ? { gridColumnStart: colStart === 0 ? 7 : colStart + 1 } : {};

                  return (
                    <div
                      key={dateStr}
                      style={colSpanStyle}
                      onClick={() => localSettings.firstWorkDay && workDay && handleDayClick(dateStr, quota || 0)}
                      className={`${bgClass} ${hoverClass} p-2 relative flex flex-col justify-between select-none min-h-[80px]`}
                    >
                      <span className={`text-sm ${!workDay ? 'text-gray-400' : 'text-gray-900 font-medium'}`}>
                        {format(day, 'd')}
                      </span>
                      
                      {!workDay ? (
                        <div className="flex-1 flex items-center justify-center">
                           <span className="text-4xl font-black text-slate-300 opacity-50">休</span>
                        </div>
                      ) : (
                        <div className="flex-1 flex flex-col items-center justify-center">
                          {quota ? (
                            <span className={`text-xl font-bold ${isFraction ? 'text-yellow-600' : 'text-green-600'}`}>
                              {quota}
                            </span>
                          ) : (
                            <span className="text-xs text-gray-300">設定配額</span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single Day Quota Edit Modal */}
      {editingDate && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setEditingDate(null)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
                      設定配額 - {editingDate}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          可休人數
                        </label>
                        <input
                          type="number"
                          step="0.5"
                          min="0"
                          autoFocus
                          value={singleQuotaValue}
                          onChange={(e) => setSingleQuotaValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && saveSingleQuota()}
                          className="shadow-sm focus:ring-blue-600 focus:border-blue-600 block w-full sm:text-lg border-gray-300 rounded-md p-3 border"
                          placeholder="請輸入數字"
                        />
                         <p className="text-xs text-gray-500 mt-2">
                            * 輸入 0 或留空代表清除配額。<br/>
                            * 整數：可排所有假別。<br/>
                            * 非整數(如0.5)：通常用於表示特殊假別，例如外宿配額。
                           </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={saveSingleQuota}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                >
                  <Save className="w-4 h-4 mr-2" />
                  儲存
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                  onClick={() => setEditingDate(null)}
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;