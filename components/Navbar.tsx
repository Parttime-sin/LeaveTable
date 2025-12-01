import React, { useState } from 'react';
import { Settings, Calendar, LogOut, User as UserIcon, ShieldCheck, Menu, X } from 'lucide-react';
import { User } from 'firebase/auth';
import { PageView, GroupType } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  isFirebaseConnected: boolean;
  user: User | null;
  onLogout: () => void;
  currentGroup: GroupType;
  onGroupChange: (group: GroupType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  isFirebaseConnected, 
  user, 
  onLogout,
  currentGroup,
  onGroupChange
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo & Desktop Nav */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center text-primary cursor-pointer" onClick={() => onNavigate('filling')}>
              <ShieldCheck className="h-8 w-8 mr-2" />
              <span className="font-bold text-lg hidden sm:block tracking-tight text-slate-800">龍岡分隊假表管理</span>
              <span className="font-bold text-lg sm:hidden text-slate-800">龍岡分隊</span>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden sm:ml-8 sm:flex sm:space-x-4">
              <button
                onClick={() => onNavigate('settings')}
                className={`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${
                  currentPage === 'settings'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                <Settings className="w-4 h-4 mr-2" />
                配額設定
              </button>
              <button
                onClick={() => onNavigate('filling')}
                className={`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${
                  currentPage === 'filling'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                假表填寫
              </button>
            </div>
          </div>

          {/* Group Switcher (Center-Right) */}
          <div className="flex items-center space-x-2 mx-4">
            <button
              onClick={() => onGroupChange('A')}
              className={`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${
                currentGroup === 'A'
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm'
                  : 'bg-white border-transparent text-gray-500 hover:bg-gray-50'
              }`}
            >
              A班
            </button>
            <button
              onClick={() => onGroupChange('B')}
              className={`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${
                currentGroup === 'B'
                  ? 'bg-teal-50 border-teal-500 text-teal-700 shadow-sm'
                  : 'bg-white border-transparent text-gray-500 hover:bg-gray-50'
              }`}
            >
              B班
            </button>
          </div>

          {/* User Profile & Actions (Desktop) */}
          <div className="hidden sm:flex items-center space-x-4">
            {isFirebaseConnected && user ? (
              <div className="flex items-center pl-4 border-l border-slate-200">
                <div className="flex flex-col items-end mr-3">
                  <span className="text-sm font-semibold text-slate-700 max-w-[120px] truncate">
                    {user.displayName || '使用者'}
                  </span>
                  <span className="text-[10px] text-slate-400 max-w-[120px] truncate">
                    {user.email}
                  </span>
                </div>
                {user.photoURL ? (
                  <img className="h-9 w-9 rounded-full border-2 border-slate-100 shadow-sm" src={user.photoURL} alt="" />
                ) : (
                  <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <UserIcon className="h-5 w-5 text-slate-400" />
                  </div>
                )}
                <button
                  onClick={onLogout}
                  className="ml-4 p-2 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                  title="登出"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
               <div className="flex items-center text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                   本機模式
                </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-100 bg-white">
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => { onNavigate('settings'); setIsMobileMenuOpen(false); }}
              className={`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${
                currentPage === 'settings'
                  ? 'bg-blue-50 border-primary text-primary'
                  : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800'
              }`}
            >
              <Settings className="w-5 h-5 mr-3" />
              配額設定
            </button>
            <button
              onClick={() => { onNavigate('filling'); setIsMobileMenuOpen(false); }}
              className={`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${
                currentPage === 'filling'
                  ? 'bg-blue-50 border-primary text-primary'
                  : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800'
              }`}
            >
              <Calendar className="w-5 h-5 mr-3" />
              假表填寫
            </button>
          </div>
          
          {/* Mobile User Section (Simplified) */}
          <div className="pt-4 pb-4 border-t border-slate-200 bg-slate-50">
            {isFirebaseConnected && user ? (
              <div className="flex justify-end px-4">
                <button
                  onClick={onLogout}
                  className="flex items-center px-4 py-2 rounded-md bg-white text-slate-600 hover:text-red-600 shadow-sm border border-slate-200 transition-colors"
                  title="登出"
                >
                  <span className="mr-2 font-medium">登出</span>
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="px-4 py-2">
                 <div className="text-center text-sm text-amber-700 bg-amber-100 py-1 rounded">
                   目前為本機離線模式
                 </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;