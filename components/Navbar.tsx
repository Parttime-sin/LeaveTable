import React from 'react';
import { Settings, CalendarDays, ClipboardEdit } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <CalendarDays className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-slate-800 hidden sm:block">
              團隊假表系統
            </span>
          </div>
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => onNavigate('settings')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'settings'
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Settings className="w-4 h-4 mr-2" />
              配額設定
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
              假表填寫
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;