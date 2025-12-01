import React, { useEffect, useState } from 'react';
import { ShieldCheck, AlertTriangle, ExternalLink, Bug } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  loading?: boolean;
  onShowDebug?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, loading, onShowDebug }) => {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [isLine, setIsLine] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    // Common in-app browser identifiers
    const inAppRegex = /FBAN|FBAV|Line\/|Instagram|MicroMessenger/i;
    setIsInAppBrowser(inAppRegex.test(ua));
    setIsLine(/Line\//i.test(ua));
  }, []);

  const handleOpenExternal = () => {
    // Attempt to force external browser for LINE
    if (window.location.search.includes('openExternalBrowser=1')) return;
    const url = new URL(window.location.href);
    url.searchParams.set('openExternalBrowser', '1');
    window.location.href = url.toString();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        <div className="bg-primary p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600 opacity-20 pattern-dots"></div>
          <div className="relative z-10">
            <div className="mx-auto bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner">
               <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wide shadow-black drop-shadow-sm">團隊假表管理系統</h1>
            <p className="text-blue-100 mt-2 text-sm font-medium">請登入以存取編輯權限</p>
          </div>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">歡迎回來</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              為了確保資料安全與編輯歷程，<br/>
              本系統採用 Google 帳號進行身分驗證。
            </p>
          </div>

          {isInAppBrowser && (
            <div className="mb-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded shadow-sm text-left">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-bold text-amber-800">偵測到應用程式內瀏覽器</h3>
                  <div className="mt-2 text-sm text-amber-700">
                    <p className="mb-2">
                      Google 安全性政策不允許在 Line、Facebook 等應用程式內建瀏覽器登入 (錯誤 403)。
                    </p>
                    <p className="font-bold mb-1">解決方法：</p>
                    {isLine && (
                      <button 
                        onClick={handleOpenExternal}
                        className="mb-2 w-full text-center px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        點此嘗試自動切換至瀏覽器
                      </button>
                    )}
                    <ul className="list-disc list-inside space-y-1 ml-1 text-xs sm:text-sm">
                      <li>點擊畫面角落的選單圖示 (通常是 <span className="font-bold">⋮</span> 或 <span className="font-bold">⋯</span>)</li>
                      <li>選擇 <span className="font-bold">「在預設瀏覽器中開啟」</span> 或 <span className="font-bold">「以 Safari/Chrome 開啟」</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={onLogin}
            disabled={loading || isInAppBrowser}
            className="w-full group relative flex items-center justify-center px-4 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                登入中...
              </span>
            ) : (
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.23856)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.424 63.239 -14.754 63.239 Z" />
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.424 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                  </g>
                </svg>
                {isInAppBrowser ? '請先切換至瀏覽器' : '使用 Google 帳號登入'}
              </span>
            )}
          </button>
        </div>
        <div className="bg-gray-50 p-4 text-center border-t border-gray-100 flex flex-col items-center w-full">
           <p className="text-xs text-slate-400 mb-2">© 團隊假表管理系統 | Secure Access</p>
           
           {onShowDebug && (
             <button onClick={onShowDebug} className="mt-1 text-[10px] text-slate-300 hover:text-slate-500 flex items-center">
               <Bug className="w-3 h-3 mr-1" /> Debug Info
             </button>
           )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;