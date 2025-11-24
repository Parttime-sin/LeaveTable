
import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, Firestore } from 'firebase/firestore';

// 定義資料庫儲存的結構
export interface DBData {
  settings: any;
  leaves: any[];
}

// 這是我們在 Firestore 中的主要 Collection 和 Document ID
// 結構: Collection "scheduler_data" -> Document "main_v1"
const COLLECTION_NAME = 'scheduler_data';
const DOC_ID = 'main_v1';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export const FirebaseService = {
  // 初始化 Firebase (接受設定物件)
  init(config: any) {
    try {
      if (!config.apiKey || !config.projectId) {
        throw new Error('設定檔缺少必要欄位 (apiKey, projectId)');
      }
      
      // 檢查是否已經有初始化的 App
      if (!getApps().length) {
        app = initializeApp(config);
      } else {
        app = getApps()[0];
      }
      
      // 取得 Firestore 實例
      db = getFirestore(app);
      
      console.log("Firebase Initialized Successfully (v10.12.2)");
      return true;
    } catch (e: any) {
      console.error("Firebase init failed:", e);
      throw e;
    }
  },

  // 讀取資料
  async loadData(): Promise<DBData> {
    if (!db) throw new Error("Database not initialized");

    const docRef = doc(db, COLLECTION_NAME, DOC_ID);
    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as DBData;
      } else {
        // 如果文件不存在，回傳空資料 (讓前端初始化)
        return { settings: null, leaves: [] };
      }
    } catch (error: any) {
        console.error("Load Data Error:", error);
        if (error.code === 'permission-denied') {
            throw new Error("權限不足：請至 Firebase Console > Firestore Database > Rules，將規則設為 'allow read, write: if true;' (測試模式)");
        }
        if (error.code === 'unavailable' || error.message.includes('offline')) {
             throw new Error("連線失敗：請檢查網路或 Firestore 服務狀態");
        }
        throw error;
    }
  },

  // 儲存資料
  async saveData(data: DBData) {
    if (!db) throw new Error("Database not initialized");

    const docRef = doc(db, COLLECTION_NAME, DOC_ID);
    // { merge: true } 會合併資料，但我們這裡是全量儲存以確保 JSON 結構完整
    await setDoc(docRef, data);
  },
  
  // 檢查連線狀態
  isInitialized() {
    return !!db;
  }
};