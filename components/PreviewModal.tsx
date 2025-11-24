import React from 'react';
import { X, User, Calendar as CalendarIcon } from 'lucide-react';
import { AppSettings, LeaveEntry } from '../types';
import { WEEKDAYS } from '../constants';

// Local date helpers to replace date-fns and avoid version/import issues
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
  if (fmt === 'EEE') return WEEKDAYS[date.getDay()];
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

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  leaves: LeaveEntry[];
  currentUser?: string;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose, settings, leaves, currentUser }) => {
  if (!isOpen) return null;

  const monthStart = startOfMonth(new Date(settings.year, settings.month));
  const monthEnd = endOfMonth(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Pre-calculate data for each day
  const getDayData = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    
    // Check work day logic
    let isWorkDay = true;
    if (settings.firstWorkDay) {
      const firstWork = parseISO(settings.firstWorkDay);
      const diff = differenceInCalendarDays(date, firstWork);
      // If diff is even, it's a work day (0, 2, 4...)
      // If diff is odd, it's an off day (1, 3, 5...)
      isWorkDay = diff % 2 === 0;
    }

    const dayLeaves = leaves.filter(l => l.date === dateStr);
    
    return { isWorkDay, dayLeaves, dateStr };
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full h-[90vh] sm:h-auto flex flex-col">
          {/* Header */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 border-b border-gray-100 flex-shrink-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl leading-6 font-bold text-gray-900" id="modal-title">
                    假表預覽
                  </h3>
                  <p className="text-sm text-gray-500">
                    {settings.year}年 {settings.month + 1}月 {currentUser && `(目前檢視: ${currentUser})`}
                  </p>
                </div>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-auto bg-gray-50 p-4">
            
            {/* Unified Grid View with Horizontal Scroll for Mobile */}
            <div className="min-w-[800px] bg-white rounded-lg shadow ring-1 ring-gray-200">
              <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                {/* Header */}
                {WEEKDAYS.map((day) => (
                  <div key={day} className="py-3 text-center text-sm font-semibold text-gray-700 border-r last:border-r-0 border-gray-200">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 bg-gray-200 gap-px border-b border-l border-r border-gray-200">
                {/* Days */}
                {daysInMonth.map((day, dayIdx) => {
                  const { isWorkDay, dayLeaves, dateStr } = getDayData(day);
                  const colSpanStyle = dayIdx === 0 ? { gridColumnStart: getDay(day) + 1 } : {};

                  return (
                    <div 
                      key={dateStr} 
                      style={colSpanStyle}
                      className={`min-h-[140px] bg-white p-2 relative flex flex-col ${!isWorkDay ? 'bg-slate-50' : ''}`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className={`text-sm font-medium ${!isWorkDay ? 'text-gray-400' : 'text-gray-900'}`}>
                          {format(day, 'd')}
                        </span>
                        {!isWorkDay && (
                          <span className="text-4xl font-black text-slate-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
                            O
                          </span>
                        )}
                      </div>

                      {isWorkDay && (
                        <div className="space-y-1 overflow-y-auto flex-1 max-h-[120px]">
                          {dayLeaves.map((leave) => {
                            const isCurrentUser = leave.memberName === currentUser;
                            return (
                              <div 
                                key={leave.id} 
                                className={`
                                  flex items-center justify-between px-2 py-1 rounded text-xs border 
                                  ${isCurrentUser 
                                    ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold ring-1 ring-amber-300 shadow-sm z-10' 
                                    : 'bg-blue-50 text-blue-700 border-blue-100'}
                                `}
                              >
                                <span className="truncate max-w-[80px]">{leave.memberName}</span>
                                <span className={`
                                  px-1.5 rounded shadow-sm text-[10px] font-medium min-w-[30px] text-center ml-1
                                  ${isCurrentUser ? 'bg-amber-200' : 'bg-white'}
                                `}>
                                  {leave.type}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex-shrink-0 flex justify-end border-t border-gray-100">
             <div className="mr-auto flex items-center text-xs text-gray-500">
                <span className="w-3 h-3 bg-amber-100 border border-amber-300 mr-1 rounded"></span> 
                <span>您的填寫項目</span>
             </div>
            <button
              type="button"
              className="w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:text-sm"
              onClick={onClose}
            >
              關閉預覽
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;