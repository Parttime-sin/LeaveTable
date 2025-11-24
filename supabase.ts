import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// 設定 Supabase 連線資訊
// 為了安全性，建議在專案根目錄建立 .env 檔案來管理這些變數：
// VITE_SUPABASE_URL=你的URL
// VITE_SUPABASE_ANON_KEY=你的KEY
// ------------------------------------------------------------------

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '請在.env檔案中設定VITE_SUPABASE_URL';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '請在.env檔案中設定VITE_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);