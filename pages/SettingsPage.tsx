import React, { useState, useEffect } from 'react';
import { Users, Calendar, AlertTriangle, Plus, Trash2, ArrowLeft, ArrowRight, CheckCircle2, Sliders, Eraser, Save, Lock, Unlock, Edit, CalendarRange } from 'lucide-react';
import { AppSettings, GroupType } from '../types';

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
  onSaveSettings: (newSettings: AppSettings) => void;
  currentGroup: GroupType;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ settings, onSaveSettings, currentGroup }) => {
  const [localSettings, setLocalSettings] = useState<AppSettings>(settings);
  const [newMemberName, setNewMemberName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Range Settings State
  const [rangeStart, setRangeStart] = useState('');
  const [rangeEnd, setRangeEnd] = useState('');
  
  // Bulk settings state
  const [bulkQuotaValue, setBulkQuotaValue] = useState<string>('2');

  // Single Day Edit State
  const [editingDate, setEditingDate] = useState<string | null>(null);
  const [singleQuotaValue, setSingleQuotaValue] = useState<string>('');

  // Helpers to get group specific data
  const getMembers = () => currentGroup === 'A' ? localSettings.membersA : localSettings.membersB;
  const getFirstWorkDay = () => currentGroup === 'A' ? localSettings.firstWorkDayA : localSettings.firstWorkDayB;
  const getDailyQuotas = () => currentGroup === 'A' ? localSettings.dailyQuotasA : localSettings.dailyQuotasB;
  const getShiftExceptions = () => currentGroup === 'A' ? (localSettings.shiftExceptionsA || {}) : (localSettings.shiftExceptionsB || {});

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  useEffect(() => {
    setNewMemberName('');
    setBulkQuotaValue('2');
    setIsEditing(false);
  }, [currentGroup]);

  const handleMonthChange = (increment: number) => {
    const currentDate = new Date(localSettings.year, localSettings.month);
    const newDate = increment > 0 ? addMonths(currentDate, 1) : subMonths(currentDate, 1);
    
    const newSettings = {
      ...localSettings,
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
      dailyQuotasA: {},
      dailyQuotasB: {}
    };
    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
  };

  const handleAddMember = () => {
    if (!isEditing) return;
    const members = getMembers();
    if (newMemberName.trim() && !members.includes(newMemberName.trim())) {
      const newMembers = [...members, newMemberName.trim()];
      const newSettings = { ...localSettings };
      if (currentGroup === 'A') newSettings.membersA = newMembers;
      else newSettings.membersB = newMembers;
      
      setLocalSettings(newSettings);
      onSaveSettings(newSettings);
      setNewMemberName('');
    }
  };

  const handleRemoveMember = (name: string) => {
    if (!isEditing) return;
    const members = getMembers();
    const newMembers = members.filter(m => m !== name);
    const newSettings = { ...localSettings };
    if (currentGroup === 'A') newSettings.membersA = newMembers;
    else newSettings.membersB = newMembers;

    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
  };

  const handleSetPattern = (day: 1 | 2) => {
    if (!isEditing) return;
    const currentMonthStart = startOfMonth(new Date(localSettings.year, localSettings.month));
    const targetDate = day === 1 ? currentMonthStart : addDays(currentMonthStart, 1);
    const dateStr = format(targetDate, 'yyyy-MM-dd');
    
    const newSettings = { ...localSettings };
    if (currentGroup === 'A') {
      newSettings.firstWorkDayA = dateStr;
      newSettings.dailyQuotasA = {}; 
    } else {
      newSettings.firstWorkDayB = dateStr;
      newSettings.dailyQuotasB = {};
    }

    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
  };

  // 新增：處理範圍例外設定
  const handleApplyRange = (type: 'work' | 'rest' | 'clear') => {
    if (!isEditing || !rangeStart || !rangeEnd) return;
    
    const start = parseISO(rangeStart);
    const end = parseISO(rangeEnd);
    
    if (start > end) {
      alert('起始日期不能晚於結束日期');
      return;
    }

    const newExceptions = { ...getShiftExceptions() };
    const rangeDays = eachDayOfInterval({ start, end });

    rangeDays.forEach(day => {
      const dateStr = format(day, 'yyyy-MM-dd');
      if (type === 'clear') {
        delete newExceptions[dateStr];
      } else {
        newExceptions[dateStr] = (type === 'work');
      }
    });

    const newSettings = { ...localSettings };
    if (currentGroup === 'A') newSettings.shiftExceptionsA = newExceptions;
    else newSettings.shiftExceptionsB = newExceptions;

    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
    alert('排班範圍設定已更新');
  };

  // 核心修改：判斷是否上班，優先檢查例外設定
  const isWorkDay = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const exceptions = getShiftExceptions();
    
    // 1. Check Exceptions first
    if (exceptions[dateStr] !== undefined) {
      return exceptions[dateStr];
    }

    // 2. Fallback to Regular Pattern
    const fw = getFirstWorkDay();
    if (!fw) return true;
    const firstWork = parseISO(fw);
    const diff = differenceInCalendarDays(date, firstWork);
    return diff % 2 === 0;
  };

  const monthStart = startOfMonth(new Date(localSettings.year, localSettings.month));
  const monthEnd = endOfMonth(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleBulkSet = (quota: number) => {
    if (!isEditing) return;
    if (!getFirstWorkDay()) return;

    const newQuotas = { ...getDailyQuotas() };
    
    daysInMonth.forEach(day => {
      if (isWorkDay(day)) { // isWorkDay now respects exceptions
        const dateStr = format(day, 'yyyy-MM-dd');
        if (quota === 0) {
          delete newQuotas[dateStr];
        } else {
          newQuotas[dateStr] = quota;
        }
      }
    });

    const newSettings = { ...localSettings };
    if (currentGroup === 'A') newSettings.dailyQuotasA = newQuotas;
    else newSettings.dailyQuotasB = newQuotas;

    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
  };

  const applyBulkQuota = () => {
    if (!isEditing) return;
    const val = parseFloat(bulkQuotaValue);
    if (!isNaN(val) && val >= 0) {
      handleBulkSet(val);
    }
  };

  const handleDayClick = (dateStr: string, currentQuota: number) => {
    if (!isEditing) return;
    setEditingDate(dateStr);
    setSingleQuotaValue(currentQuota > 0 ? currentQuota.toString() : '');
  };

  const saveSingleQuota = () => {
    if (!editingDate) return;
    
    const val = parseFloat(singleQuotaValue);
    const newQuotas = { ...getDailyQuotas() };
    
    if (isNaN(val) || val === 0) {
      delete newQuotas[editingDate];
    } else {
      newQuotas[editingDate] = val;
    }

    const newSettings = { ...localSettings };
    if (currentGroup === 'A') newSettings.dailyQuotasA = newQuotas;
    else newSettings.dailyQuotasB = newQuotas;

    setLocalSettings(newSettings);
    onSaveSettings(newSettings);
    setEditingDate(null);
    setSingleQuotaValue('');
  };

  const currentFirstWorkDay = getFirstWorkDay();
  const hasSetting = !!currentFirstWorkDay;
  const activePattern = !hasSetting ? null : (isWorkDay(monthStart) ? 1 : 2); // 注意：若1號被設為例外，此顯示可能不準確，但不影響功能
  const currentMembers = getMembers();
  const currentDailyQuotas = getDailyQuotas();

  const groupColorClass = currentGroup === 'A' ? 'text-indigo-600' : 'text-teal-600';
  const groupBgClass = currentGroup === 'A' ? 'bg-indigo-50 border-indigo-200' : 'bg-teal-50 border-teal-200';
  const groupButtonClass = currentGroup === 'A' ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-600' : 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-600';
  const groupFocusClass = currentGroup === 'A' ? 'focus:border-indigo-600 focus:ring-indigo-600' : 'focus:border-teal-600 focus:ring-teal-600';
  const opacityClass = isEditing ? 'opacity-100' : 'opacity-60 cursor-not-allowed';

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 mr-3">設定頁面</h1>
            <span className={`px-3 py-1 rounded-full text-sm font-bold border ${groupBgClass} ${groupColorClass}`}>
              目前設定：{currentGroup}班
            </span>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center px-4 py-2 rounded-md font-bold shadow-sm transition-all ${
            isEditing 
              ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isEditing ? (
            <>
              <Save className="w-5 h-5 mr-2" />
              儲存並鎖定
            </>
          ) : (
            <>
              <Edit className="w-5 h-5 mr-2" />
              啟用編輯模式
            </>
          )}
        </button>
      </div>

      {!isEditing && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6 rounded-r shadow-sm flex items-start">
           <Lock className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
           <p className="text-sm text-yellow-700">
             目前為<strong>鎖定閱覽模式</strong>。如需修改配額、人員或非常規排班，請點擊右上角「啟用編輯模式」。
           </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          
          <div className="bg-white shadow rounded-lg p-6 relative overflow-hidden">
             <div className={`absolute top-0 left-0 w-1 h-full ${currentGroup === 'A' ? 'bg-indigo-500' : 'bg-teal-500'}`}></div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Calendar className={`w-5 h-5 mr-2 ${groupColorClass}`} />
              基本設定 ({currentGroup}班)
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
                  設定當月首日上班日
                </label>
                
                <div className={`grid grid-cols-2 gap-3 mb-4 ${opacityClass}`}>
                  <button
                    onClick={() => handleSetPattern(1)}
                    disabled={!isEditing}
                    className={`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${
                      activePattern === 1
                        ? `bg-blue-50 border-current ${groupColorClass}` 
                        : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl font-bold">1號</span>
                    <span className="text-xs mt-1 opacity-80">基數日上班</span>
                  </button>

                  <button
                    onClick={() => handleSetPattern(2)}
                    disabled={!isEditing}
                    className={`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${
                      activePattern === 2
                        ? `bg-blue-50 border-current ${groupColorClass}` 
                        : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl font-bold">2號</span>
                    <span className="text-xs mt-1 opacity-80">偶數日上班</span>
                  </button>
                </div>

                {/* 新增：非常規排班 (範圍設定) */}
                <div className={`pt-4 border-t border-gray-100 ${opacityClass}`}>
                    <h3 className="text-sm font-bold text-gray-700 mb-2 flex items-center">
                       <CalendarRange className="w-4 h-4 mr-1 text-orange-500"/>
                       非常規排班 (範圍設定)
                    </h3>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div>
                        <label className="text-xs text-gray-500">起始日期</label>
                        <input 
                          type="date" 
                          value={rangeStart}
                          disabled={!isEditing}
                          onChange={(e) => setRangeStart(e.target.value)}
                          className="block w-full text-xs rounded border-gray-300 p-1 border"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">結束日期</label>
                        <input 
                          type="date" 
                          value={rangeEnd}
                          disabled={!isEditing}
                          onChange={(e) => setRangeEnd(e.target.value)}
                          className="block w-full text-xs rounded border-gray-300 p-1 border"
                        />
                      </div>
                    </div>
                    <div className="flex gap-1">
                       <button
                         onClick={() => handleApplyRange('work')}
                         disabled={!isEditing}
                         className="flex-1 bg-green-50 text-green-700 text-xs py-1 px-2 rounded border border-green-200 hover:bg-green-100"
                       >
                         設為上班
                       </button>
                       <button
                         onClick={() => handleApplyRange('rest')}
                         disabled={!isEditing}
                         className="flex-1 bg-slate-50 text-slate-700 text-xs py-1 px-2 rounded border border-slate-200 hover:bg-slate-100"
                       >
                         設為輪休
                       </button>
                       <button
                         onClick={() => handleApplyRange('clear')}
                         disabled={!isEditing}
                         className="flex-1 bg-white text-red-500 text-xs py-1 px-2 rounded border border-red-200 hover:bg-red-50"
                       >
                         清除設定
                       </button>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2">
                      * 選取日期範圍，強制設定該區間為上班或輪休。此設定優先權高於上方常規循環。
                    </p>
                </div>

              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full ${currentGroup === 'A' ? 'bg-indigo-500' : 'bg-teal-500'}`}></div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center">
                <Users className={`w-5 h-5 mr-2 ${groupColorClass}`} />
                {currentGroup}班人員 ({currentMembers.length})
              </h2>
            </div>
            
            <div className={`flex space-x-2 mb-4 ${opacityClass}`}>
              <input
                type="text"
                placeholder="輸入姓名"
                value={newMemberName}
                disabled={!isEditing}
                onChange={(e) => setNewMemberName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddMember()}
                className={`flex-1 rounded-md border-gray-300 shadow-sm focus:ring-opacity-50 border p-2 text-sm focus:ring ${groupFocusClass}`}
              />
              <button
                onClick={handleAddMember}
                disabled={!newMemberName.trim() || !isEditing}
                className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white focus:outline-none disabled:opacity-50 transition-colors ${groupButtonClass}`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto space-y-2">
              {currentMembers.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-4">暫無 {currentGroup} 班人員資料</p>
              )}
              {currentMembers.map(member => (
                <div key={member} className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
                  <span className="text-gray-800 font-medium">{member}</span>
                  <button 
                    onClick={() => handleRemoveMember(member)} 
                    disabled={!isEditing}
                    className={`text-gray-400 hover:text-red-500 transition-colors ${!isEditing ? 'invisible' : ''}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg p-6 h-full flex flex-col relative overflow-hidden">
             <div className={`absolute top-0 left-0 w-1 h-full ${currentGroup === 'A' ? 'bg-indigo-500' : 'bg-teal-500'}`}></div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                {currentGroup}班 - 可休人數配額設定
              </h2>
              {isEditing && (
                <span className="text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded border border-red-100 animate-pulse">
                  編輯中
                </span>
              )}
            </div>

            {!currentFirstWorkDay ? (
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-amber-700">
                      請先在左側設定「{currentGroup}班當月首日上班日」以啟用配額設定功能。
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 ${opacityClass}`}>
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                  <Sliders className={`w-4 h-4 mr-2 ${groupColorClass}`} />
                  批量配額設定
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 items-end sm:items-center">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">每日可休人數</label>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      disabled={!isEditing}
                      value={bulkQuotaValue}
                      onChange={(e) => setBulkQuotaValue(e.target.value)}
                      className={`block w-full w-32 rounded-md border-gray-300 shadow-sm text-sm p-2 border focus:ring focus:ring-opacity-50 ${groupFocusClass}`}
                      placeholder="例如: 2"
                    />
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={applyBulkQuota}
                      disabled={!isEditing}
                      className={`flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition-colors ${groupButtonClass}`}
                    >
                      套用至本月上班日
                    </button>
                    <button
                      onClick={() => handleBulkSet(0)}
                      disabled={!isEditing}
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
                {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
                  <div key={day} className="bg-gray-100 py-2 text-center text-sm font-semibold text-gray-700">
                    {day}
                  </div>
                ))}

                {daysInMonth.map((day, dayIdx) => {
                  const dateStr = format(day, 'yyyy-MM-dd');
                  const workDay = isWorkDay(day);
                  const quota = currentDailyQuotas[dateStr];
                  const isFraction = quota && !Number.isInteger(quota);
                  
                  let bgClass = "bg-white";
                  let hoverClass = "";
                  
                  if (!workDay) {
                    bgClass = "bg-slate-100 cursor-not-allowed";
                  } else if (!isEditing) {
                    hoverClass = "cursor-not-allowed"; 
                    if (isFraction) bgClass = "bg-yellow-50";
                    else if (quota && quota > 0) bgClass = "bg-green-50";
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
                      onClick={() => {
                        if (isEditing && currentFirstWorkDay && workDay) {
                          handleDayClick(dateStr, quota || 0);
                        }
                      }}
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
                            <span className="text-xs text-gray-300">
                              {isEditing ? '設定' : '未設定'}
                            </span>
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
                      設定配額 ({currentGroup}班) - {editingDate}
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
                          className={`shadow-sm block w-full sm:text-lg border-gray-300 rounded-md p-3 border focus:ring focus:ring-opacity-50 ${groupFocusClass}`}
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
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors ${groupButtonClass}`}
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