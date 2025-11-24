
const API_URL = 'https://api.github.com/gists';
const FILE_NAME = 'shift_scheduler_db.json';

export interface DBData {
  settings: any;
  leaves: any[];
}

export const GithubService = {
  // 驗證 Token 並取得使用者資訊 (測試連線用)
  async validateToken(token: string) {
    const res = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    if (!res.ok) throw new Error('Invalid Token');
    return res.json();
  },

  // 讀取 Gist 資料
  async loadData(token: string, gistId: string): Promise<DBData> {
    const res = await fetch(`${API_URL}/${gistId}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!res.ok) throw new Error('Failed to load Gist');
    
    const data = await res.json();
    const file = data.files[FILE_NAME];
    
    if (!file) {
      // 如果檔案不存在，可能是新的 Gist 或被改名，回傳空結構
      return { settings: null, leaves: [] };
    }

    try {
      return JSON.parse(file.content);
    } catch (e) {
      console.error("JSON Parse Error", e);
      return { settings: null, leaves: [] };
    }
  },

  // 建立新的 Gist (資料庫初始化)
  async createDatabase(token: string, initialData: DBData) {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: 'Shift Scheduler Database (Created via App)',
        public: false, // 建立私密 Gist
        files: {
          [FILE_NAME]: {
            content: JSON.stringify(initialData, null, 2),
          },
        },
      }),
    });

    if (!res.ok) throw new Error('Failed to create Gist');
    const data = await res.json();
    return data.id; // 回傳新的 Gist ID
  },

  // 更新 Gist (儲存資料)
  async saveData(token: string, gistId: string, data: DBData) {
    const res = await fetch(`${API_URL}/${gistId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        files: {
          [FILE_NAME]: {
            content: JSON.stringify(data, null, 2),
          },
        },
      }),
    });

    if (!res.ok) throw new Error('Failed to save data');
    return res.json();
  }
};
