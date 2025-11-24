import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// 設定 Supabase 連線資訊
// 為了安全性，建議在專案根目錄建立 .env 檔案來管理這些變數：
// VITE_SUPABASE_URL=你的URL
// VITE_SUPABASE_ANON_KEY=你的KEY
// ------------------------------------------------------------------

// 安全讀取環境變數的輔助函式
const getEnvVar = (key: keyof ImportMetaEnv): string => {
  try {
    // 檢查 import.meta 是否存在以及 import.meta.env 是否存在
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env[key] || '';
    }
  } catch (e) {
    console.warn(`Failed to read env var ${key}`, e);
  }
  return '';
};

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL') || '請在.env檔案中設定VITE_SUPABASE_URL';
const supabaseKey = getEnvVar('VITE_SUPABASE_ANON_KEY') || '請在.env檔案中設定VITE_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);
