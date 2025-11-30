import React from 'react';
import { Settings, CalendarDays, ClipboardEdit, Cloud, Database } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  isFirebaseConnected: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isFirebaseConnected }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <CalendarDays className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-slate-800 hidden sm:block">
              團隊假表系統
            </span>
            
            {/* Sync Status Badge */}
            <div 
              className={`ml-4 px-2 py-1 rounded-full text-xs font-medium flex items-center border ${
                isFirebaseConnected 
                  ? 'bg-green-50 text-green-700 border-green-200' 
                  : 'bg-slate-100 text-slate-500 border-slate-200'
              }`}
              title={isFirebaseConnected ? "已連線至雲端資料庫 (多人協作模式)" : "使用本機儲存 (請設定 Firebase 以啟用多人協作)"}
            >
              {isFirebaseConnected ? (
                <>
                  <Cloud className="w-3 h-3 mr-1" />
                  已同步
                </>
              ) : (
                <>
                  <Database className="w-3 h-3 mr-1" />
                  本機模式
                </>
              )}
            </div>
          </div>
          
          <div className="flex space-x-2 sm:space-x-4 items-center">
            <button
              onClick={() => onNavigate('settings')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'settings'
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Settings className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">配額設定</span>
            </button>
            <button
              onClick={() => onNavigate('filling')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'filling'
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <ClipboardEdit className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">假表填寫</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;