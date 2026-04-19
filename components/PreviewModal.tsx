import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, ZoomIn, ZoomOut } from 'lucide-react';
import { MonthlySettings, MonthlyLeaveEntry, GroupType } from '../types';
import { WEEKDAYS } from '../constants';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  getDay,
} from '../utils/dateHelpers';
import { isWorkDay as computeIsWorkDay } from '../utils/shiftLogic';

const parseMonthKey = (key: string): { year: number; month0: number } => {
  const [y, m] = key.split('-').map(Number);
  return { year: y, month0: (m || 1) - 1 };
};

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: MonthlySettings;
  entries: MonthlyLeaveEntry[];
  currentMonthKey: string;
  currentUser?: string;
  currentGroup: GroupType;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  settings,
  entries,
  currentMonthKey,
  currentUser,
  currentGroup,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const { year, month0 } = parseMonthKey(currentMonthKey);
  const monthStart = startOfMonth(new Date(year, month0));
  const monthEnd = endOfMonth(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const groupColorClass = currentGroup === 'A' ? 'text-indigo-600' : 'text-teal-600';
  const groupBgClass = currentGroup === 'A' ? 'bg-indigo-100' : 'bg-teal-100';

  // Dynamic Styles based on Zoom
  const containerMinWidth = isZoomed ? 'min-w-[1000px]' : 'min-w-[500px] md:min-w-[800px]';
  const headerTextSize = isZoomed ? 'text-sm py-3' : 'text-[10px] sm:text-sm py-1 sm:py-3';
  const cellMinHeight = isZoomed ? 'min-h-[100px] p-2' : 'min-h-[30px] sm:min-h-[60px] md:min-h-[120px] p-0.5 sm:p-2';
  const dateTextSize = isZoomed ? 'text-base font-bold' : 'text-[9px] sm:text-sm font-medium';
  const leaveWrapperPadding = isZoomed ? 'px-2 py-1 mb-1' : 'px-0.5 py-0 sm:px-2 sm:py-1';
  const leaveNameSize = isZoomed ? 'text-sm max-w-[120px]' : 'text-[8px] sm:text-xs max-w-[80px]';
  const leaveTypeSize = isZoomed ? 'text-xs min-w-[32px] px-1' : 'text-[8px] sm:text-[10px] min-w-[14px] sm:min-w-[24px] px-0.5';
  const leavesContainerMaxHeight = isZoomed ? 'max-h-[200px]' : 'max-h-[120px]';

  // Pre-calculate data for each day
  const getDayData = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const isWorkDay = computeIsWorkDay(dateStr, settings.firstWorkDay, settings.shiftExceptions);
    const dayLeaves = entries.filter(
      (l) => l.date === dateStr && settings.members.includes(l.memberName)
    );
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
                <div className={`${groupBgClass} p-2 rounded-full mr-3`}>
                  <CalendarIcon className={`h-6 w-6 ${groupColorClass}`} />
                </div>
                <div>
                  <h3 className="text-xl leading-6 font-bold text-gray-900" id="modal-title">
                    假表預覽 ({currentGroup}班)
                  </h3>
                  <p className="text-sm text-gray-500">
                    {year}年 {month0 + 1}月 {currentUser && `(目前檢視: ${currentUser})`}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="hidden sm:inline-flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-sm font-medium mr-2"
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4 mr-1" /> : <ZoomIn className="w-4 h-4 mr-1" />}
                  {isZoomed ? '縮小' : '放大'}
                </button>
                {/* Mobile Icon Only Zoom Button */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="sm:hidden inline-flex items-center p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors mr-2"
                >
                  {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                </button>

                <button onClick={onClose} className="text-gray-400 hover:text-gray-500 p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-auto bg-gray-50 p-2 sm:p-4">
            
            {/* Unified Grid View with optimized sizing */}
            <div className={`${containerMinWidth} bg-white rounded-lg shadow ring-1 ring-gray-200 transition-all duration-300`}>
              <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                {/* Header */}
                {WEEKDAYS.map((day) => (
                  <div key={day} className={`text-center font-semibold text-gray-700 border-r last:border-r-0 border-gray-200 ${headerTextSize}`}>
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
                      className={`relative flex flex-col bg-white ${!isWorkDay ? 'bg-slate-50' : ''} ${cellMinHeight}`}
                    >
                      <div className="flex justify-between items-start mb-0.5">
                        <span className={`${dateTextSize} ${!isWorkDay ? 'text-gray-400' : 'text-gray-900'}`}>
                          {format(day, 'd')}
                        </span>
                        {!isWorkDay && (
                          <span className={`font-black text-slate-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none ${isZoomed ? 'text-6xl' : 'text-lg sm:text-2xl md:text-4xl'}`}>
                            O
                          </span>
                        )}
                      </div>

                      {isWorkDay && (
                        <div className={`space-y-0.5 sm:space-y-1 overflow-y-auto flex-1 ${leavesContainerMaxHeight}`}>
                          {dayLeaves.map((leave) => {
                            const isCurrentUser = leave.memberName === currentUser;
                            return (
                              <div
                                key={`${leave.memberName}_${leave.date}`}
                                className={`
                                  flex items-center justify-between rounded border 
                                  ${leaveWrapperPadding}
                                  ${isCurrentUser 
                                    ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold ring-1 ring-amber-300 shadow-sm z-10' 
                                    : 'bg-blue-50 text-blue-700 border-blue-100'}
                                `}
                              >
                                <span className={`truncate leading-tight ${leaveNameSize}`}>{leave.memberName}</span>
                                <span className={`
                                  rounded shadow-sm font-medium text-center ml-0.5 leading-tight
                                  ${leaveTypeSize}
                                  ${isCurrentUser ? 'bg-amber-200' : 'bg-white'}
                                `}>
                                  {leave.category}{leave.order}
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