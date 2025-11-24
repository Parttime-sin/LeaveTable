import React, { useState, useEffect } from 'react';
import { AppSettings, LeaveEntry, LeaveType } from '../types';
import { WEEKDAYS, FULL_DAY_LEAVES, HALF_DAY_LEAVES, ALL_LEAVES } from '../constants';
import { Save, AlertCircle, Plus, X, Share2, Info } from 'lucide-react';

// Local date helpers to replace date-fns
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

interface FillingPageProps {
  settings: AppSettings;
  savedLeaves: LeaveEntry[]; // From App state (persistent)
  onSaveLeaves: (leaves: LeaveEntry[]) => void;
}

const FillingPage: React.FC<FillingPageProps> = ({ settings, savedLeaves, onSaveLeaves }) => {
  // Local state for editing, initialized from props
  const [currentLeaves, setCurrentLeaves] = useState<LeaveEntry[]>(savedLeaves);
  const [currentUser, setCurrentUser] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<LeaveType | ''>('');
  
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);

  // Validation Check: Are settings ready?
  const isSettingsValid = settings.firstWorkDay && settings.members.length > 0;
  
  // Update local state when saved data changes (e.g. initial load)
  useEffect(() => {
    setCurrentLeaves(savedLeaves);
  }, [savedLeaves]);

  const handleSave = () => {
    // This triggers the write to Firebase in App.tsx
    onSaveLeaves(currentLeaves);
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('連結已複製！');
  };

  const isWorkDay = (dateStr: string) => {
    if (!settings.firstWorkDay) return false;
    const date = parseISO(dateStr);
    const firstWork = parseISO(settings.firstWorkDay);
    const diff = differenceInCalendarDays(date, firstWork);
    return diff % 2 === 0;
  };

  const getQuota = (dateStr: string) => settings.dailyQuotas[dateStr] || 0;

  const handleAddLeave = () => {
    if (!selectedDate || !currentUser || !selectedType) return;

    const newLeave: LeaveEntry = {
      id: Math.random().toString(36).substr(2, 9),
      date: selectedDate,
      memberName: currentUser,
      type: selectedType as LeaveType,
      timestamp: Date.now(), // Add timestamp here
    };

    // Remove existing leave for this person on this date if exists
    const filtered = currentLeaves.filter(l => !(l.date === selectedDate && l.memberName === currentUser));
    
    const updatedList = [...filtered, newLeave];
    setCurrentLeaves(updatedList);
    
    // Reset form (Empty the form)
    setSelectedType('');
    setSelectedDate(null); 
  };

  const handleRemoveLeave = (id: string) => {
    setCurrentLeaves(prev => prev.filter(l => l.id !== id));
  };

  // Calendar setup
  const monthStart = startOfMonth(new Date(settings.year, settings.month));
  const monthEnd = endOfMonth(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Modal logic inside render
  const quotaForSelected = selectedDate ? getQuota(selectedDate) : 0;
  const isIntegerQuota = Number.isInteger(quotaForSelected);
  
  // Available leave types based on quota
  const availableLeaveTypes = !selectedDate 
    ? [] 
    : isIntegerQuota 
      ? FULL_DAY_LEAVES 
      : ALL_LEAVES;

  if (!isSettingsValid) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <AlertCircle className="w-16 h-16 text-warning mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">設定尚未完成</h2>
        <p className="text-gray-600 max-w-md">
          請先返回「配額設定」頁面，設定「當月首日上班日」並新增「團隊人員」，才能開始填寫假表。
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {settings.year}年 {settings.month + 1}月 假表填寫
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            請選擇您的姓名，點擊上班日期進行填寫。記得點擊儲存。
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
           <button 
            onClick={handleCopyLink}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Share2 className="w-4 h-4 mr-2" />
            分享連結
          </button>
          <button 
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-600"
          >
            <Save className="w-4 h-4 mr-2" />
            儲存變更
          </button>
        </div>
      </div>

      {showSaveSuccess && (
        <div className="fixed top-20 right-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50 animate-bounce">
          儲存成功！
        </div>
      )}

      {/* User Selector */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex items-center space-x-4 sticky top-16 z-40 border-b border-gray-100">
        <label className="text-sm font-bold text-gray-700 whitespace-nowrap">我是：</label>
        <select 
          value={currentUser} 
          onChange={(e) => setCurrentUser(e.target.value)}
          className="block w-full max-w-xs rounded-md border-gray-300 border p-2 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
        >
          <option value="">-- 請選擇姓名 --</option>
          {settings.members.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        {!currentUser && <span className="text-sm text-red-500 animate-pulse font-medium">請先選擇姓名</span>}
      </div>

      {/* Calendar Grid Container - Added horizontal scroll for mobile */}
      <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]"> {/* Force minimum width to prevent squishing on mobile */}
            
            {/* Grid Header */}
            <div className="grid grid-cols-7 gap-px bg-gray-200 border-b border-gray-200">
              {WEEKDAYS.map(day => (
                <div key={day} className="bg-gray-50 py-3 text-center text-sm font-bold text-gray-700">
                  {day}
                </div>
              ))}
            </div>

            {/* Grid Body */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {daysInMonth.map((day, dayIdx) => {
                const dateStr = format(day, 'yyyy-MM-dd');
                const workDay = isWorkDay(dateStr);
                const quota = getQuota(dateStr);
                const dayLeaves = currentLeaves.filter(l => l.date === dateStr);
                const leavesCount = dayLeaves.length;
                const isOverQuota = quota > 0 && leavesCount > quota; 
                
                const colSpanStyle = dayIdx === 0 ? { gridColumnStart: getDay(day) + 1 } : {};

                return (
                  <div 
                    key={dateStr}
                    style={colSpanStyle}
                    className={`min-h-[140px] bg-white relative flex flex-col ${!workDay ? 'bg-slate-50' : ''}`}
                  >
                    {/* Day Header */}
                    <div className="flex justify-between items-start p-2">
                      <span className={`text-sm font-medium ${!workDay ? 'text-gray-400' : 'text-gray-900'}`}>
                        {format(day, 'd')}
                      </span>
                      {workDay && quota > 0 && (
                        <div className={`flex items-center text-xs px-1.5 py-0.5 rounded-full ${isOverQuota ? 'bg-red-100 text-red-700 font-bold' : 'bg-green-100 text-green-700'}`}>
                          {leavesCount} / {quota}
                          {isOverQuota && <AlertCircle className="w-3 h-3 ml-1" />}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    {!workDay ? (
                      <div className="flex-1 flex items-center justify-center">
                          <span className="text-5xl font-black text-slate-200 select-none">O</span>
                      </div>
                    ) : (
                      <div className="flex-1 px-2 pb-2 flex flex-col gap-1">
                        {/* Render existing leaves */}
                        {dayLeaves.map(leave => {
                          const isCurrentUser = currentUser === leave.memberName;
                          return (
                            <div 
                              key={leave.id} 
                              className={`
                                flex justify-between items-center px-2 py-1.5 rounded border mb-0.5 group
                                ${isCurrentUser 
                                  ? 'bg-amber-100 text-amber-900 border-amber-300 ring-1 ring-amber-300 z-10' 
                                  : 'bg-blue-50 text-blue-700 border-blue-100'}
                              `}
                            >
                              <div className="flex-1 flex justify-between items-center overflow-hidden mr-1">
                                <span className="font-bold truncate text-xs">{leave.memberName}</span>
                                <span className="font-bold whitespace-nowrap text-xs">{leave.type}</span>
                              </div>
                              {/* Only allow deleting if it's the current user */}
                              {(currentUser === leave.memberName) && (
                                <button onClick={(e) => { e.stopPropagation(); handleRemoveLeave(leave.id); }} className="text-gray-400 hover:text-red-600 ml-1">
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          );
                        })}

                        {/* Add Button */}
                        {currentUser && quota > 0 && (
                          <button 
                            onClick={() => { setSelectedDate(dateStr); setSelectedType(''); }}
                            className="mt-auto w-full flex justify-center items-center py-1 border-2 border-dashed border-gray-200 rounded text-gray-400 hover:border-primary hover:text-primary transition-colors text-xs"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
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

      {/* Add Leave Modal */}
      {selectedDate && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSelectedDate(null)}></div>
             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
             
             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                 <div className="sm:flex sm:items-start">
                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                     <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
                       新增假單 - {selectedDate}
                     </h3>
                     <div className="mb-4 text-sm text-gray-500">
                       <p>填寫人：<span className="font-bold text-gray-900">{currentUser}</span></p>
                       <p>當日配額：{getQuota(selectedDate)} ({isIntegerQuota ? '可選一般假別' : '可選一般假別 + 外宿'})</p>
                     </div>
                     
                     <div className="grid grid-cols-4 gap-2">
                        {availableLeaveTypes.map(type => (
                          <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`p-2 text-sm rounded border ${selectedType === type ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                          >
                            {type}
                          </button>
                        ))}
                     </div>
                   </div>
                 </div>
               </div>
               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                 <button
                   type="button"
                   disabled={!selectedType}
                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-blue-700 focus:outline-none disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm"
                   onClick={handleAddLeave}
                 >
                   確定新增
                 </button>
                 <button
                   type="button"
                   className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                   onClick={() => setSelectedDate(null)}
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

export default FillingPage;