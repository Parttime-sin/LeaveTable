
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './pages/SettingsPage';
import FillingPage from './pages/FillingPage';
import { AppSettings, LeaveEntry, PageView } from './types';
import { FirebaseService, DBData } from './services/firebase';
import { Save, LogOut, Loader2, Flame, AlertCircle, HelpCircle, RefreshCw } from 'lucide-react';

const DEFAULT_SETTINGS: AppSettings = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  firstWorkDay: '', 
  members: [],
  dailyQuotas: {},
};

// LocalStorage Keys
const LS_CONFIG_KEY = 'shift_firebase_config';

const App: React.FC = () => {
  // Config State
  const [firebaseConfigStr, setFirebaseConfigStr] = useState<string>(localStorage.getItem(LS_CONFIG_KEY) || '');
  const [isConnected, setIsConnected] = useState(false);

  // App Data State
  const [page, setPage] = useState<PageView>('settings');
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [leaves, setLeaves] = useState<LeaveEntry[]>([]);
  
  // UI State
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 初始化：如果有 Config，嘗試連線
  useEffect(() => {
    if (firebaseConfigStr) {
      connectToFirebase(firebaseConfigStr);
    }
  }, []);

  // 改進後的解析器：使用 new Function 來處理 JS 物件實字
  const parseFirebaseConfig = (input: string) => {
    const trimmed = input.trim();
    if (!trimmed) throw new Error("設定檔內容為空");
    
    // 1. 嘗試標準 JSON
    try {
      return JSON.parse(trimmed);
    } catch (e) {
      // 忽略 JSON 錯誤，繼續嘗試 JS 解析
    }

    // 2. 嘗試解析 JS 物件字串 (例如從 Firebase Console 複製的 const firebaseConfig = { ... })
    try {
      let objectString = trimmed;

      // 嘗試抓取最外層的 { 和 }
      const firstBrace = objectString.indexOf('{');
      const lastBrace = objectString.lastIndexOf('}');

      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        objectString = objectString.substring(firstBrace, lastBrace + 1);
      } else {
        // 如果找不到花括號，假設使用者只貼了內容但忘了括號，或者格式完全錯誤
        throw new Error("找不到物件括號 { }");
      }

      // 使用 new Function 來執行這段 JS 代碼並回傳物件
      const fn = new Function(`return ${objectString};`);
      const result = fn();
      
      if (!result || typeof result !== 'object') {
         throw new Error("解析結果不是有效的物件");
      }
      return result;
    } catch (e2) {
      console.error("Config parsing error:", e2);
      throw new Error("無法解析設定檔格式，請確保複製包含 { } 的完整程式碼片段");
    }
  };

  const connectToFirebase = async (configStr: string) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const configObj = parseFirebaseConfig(configStr);
      FirebaseService.init(configObj);
      
      const data = await FirebaseService.loadData();
      
      if (data.settings) setSettings(data.settings);
      else setSettings(DEFAULT_SETTINGS);
      
      if (data.leaves) setLeaves(data.leaves);
      else setLeaves([]);

      setIsConnected(true);
      localStorage.setItem(LS_CONFIG_KEY, configStr);
    } catch (err: any) {
      console.error("Connection Error:", err);
      let msg = err.message || "發生未知錯誤";
      
      if (msg.includes("API key")) msg = "設定檔無效：找不到 API Key 欄位。";
      else if (msg.includes("projectId")) msg = "設定檔無效：找不到 projectId 欄位。";
      else if (msg.includes("解析")) msg = "格式錯誤：請複製包含 { } 的完整程式碼。";
      else if (msg.includes("Service firestore is not available") || msg.includes("SDK 版本衝突")) {
        msg = "系統元件載入衝突，請嘗試重新整理頁面。";
      }
      
      setErrorMsg(msg);
      setIsConnected(false);
    } finally {
      setLoading(false);
    }
  };

  const handleManualConnect = () => {
    if (!firebaseConfigStr.trim()) return setErrorMsg("請貼上 Firebase Config");
    connectToFirebase(firebaseConfigStr);
  };

  const handleLogout = () => {
    if (confirm("確定要登出嗎？這將清除瀏覽器紀錄的連線設定。")) {
      localStorage.removeItem(LS_CONFIG_KEY);
      setFirebaseConfigStr('');
      setIsConnected(false);
      setSettings(DEFAULT_SETTINGS);
      setLeaves([]);
      window.location.reload(); 
    }
  };

  // Generic Save Function
  const saveDataToFirebase = async (newSettings: AppSettings, newLeaves: LeaveEntry[]) => {
    if (!isConnected) return;
    setSyncing(true);
    try {
      const data: DBData = {
        settings: newSettings,
        leaves: newLeaves
      };
      await FirebaseService.saveData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setSyncing(false);
    }
  };

  const onSaveSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    saveDataToFirebase(newSettings, leaves);
  };

  const onSaveLeaves = (newLeaves: LeaveEntry[]) => {
    setLeaves(newLeaves);
    saveDataToFirebase(settings, newLeaves);
  };

  // --- RENDER: SETUP SCREEN ---
  if (!isConnected) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full border border-slate-100">
          <div className="flex justify-center mb-6">
            <div className="bg-amber-50 p-4 rounded-full ring-4 ring-amber-50/50">
              <Flame className="w-12 h-12 text-amber-500" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-slate-800 mb-2">連接 Firebase 資料庫</h1>
          <p className="text-sm text-slate-500 text-center mb-6">
            請將 Firebase Console 提供的 Config 程式碼完整貼在下方。
          </p>

          {errorMsg && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm flex flex-col items-start gap-2">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="flex-1 font-medium">{errorMsg}</span>
              </div>
              {errorMsg.includes("重新整理") && (
                <button 
                  onClick={() => window.location.reload()}
                  className="ml-7 text-xs bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-full flex items-center transition-colors"
                >
                  <RefreshCw className="w-3 h-3 mr-1" />
                  點此重新整理
                </button>
              )}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-slate-700">
                  Firebase Config
                </label>
                <a 
                  href="https://console.firebase.google.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-amber-600 hover:text-amber-700 flex items-center"
                >
                  <HelpCircle className="w-3 h-3 mr-1" />
                  前往 Console
                </a>
              </div>
              <textarea
                value={firebaseConfigStr}
                onChange={(e) => setFirebaseConfigStr(e.target.value)}
                placeholder={'const firebaseConfig = {\n  apiKey: "AIzaSy...",\n  authDomain: "...",\n  projectId: "..."\n};'}
                className="w-full h-40 px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all font-mono text-xs bg-slate-50"
              />
              <div className="mt-3 bg-blue-50 p-3 rounded-md border border-blue-100">
                <h4 className="text-xs font-bold text-blue-800 mb-1">設定指南：</h4>
                <ol className="list-decimal list-inside text-xs text-blue-700 space-y-1">
                  <li>建立專案 ➔ 新增 Web App ➔ 複製 <code>const firebaseConfig = ...</code> 整段代碼。</li>
                  <li>左側選單 ➔ <b>Firestore Database</b> ➔ 建立資料庫。</li>
                  <li>
                    <span className="font-bold">重要：</span>
                    選擇 <b>Start in test mode</b> (測試模式) 以允許讀寫。
                  </li>
                </ol>
              </div>
            </div>

            <button
              onClick={handleManualConnect}
              disabled={loading || !firebaseConfigStr}
              className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : '連線並載入資料'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER: MAIN APP ---
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Navbar currentPage={page} onNavigate={setPage} />
      
      {/* Status Bar */}
      <div className="bg-slate-800 text-slate-300 px-4 py-1 text-xs flex justify-between items-center shadow-inner">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-amber-400">
            <Flame className="w-3 h-3 mr-1" />
            Firebase Connected
          </span>
        </div>
        <div className="flex items-center space-x-3">
          {syncing ? (
             <span className="flex items-center text-yellow-400">
               <Loader2 className="w-3 h-3 animate-spin mr-1" />
               儲存中...
             </span>
          ) : (
             <span className="flex items-center text-green-400">
               <Save className="w-3 h-3 mr-1" />
               已同步
             </span>
          )}
          <button onClick={handleLogout} className="hover:text-white flex items-center ml-2 border-l border-slate-600 pl-3 transition-colors">
            <LogOut className="w-3 h-3 mr-1" /> 登出
          </button>
        </div>
      </div>

      {page === 'settings' ? (
        <SettingsPage 
          settings={settings} 
          onSaveSettings={onSaveSettings} 
        />
      ) : (
        <FillingPage 
          settings={settings} 
          savedLeaves={leaves} 
          onSaveLeaves={onSaveLeaves} 
        />
      )}
    </div>
  );
};

export default App;
