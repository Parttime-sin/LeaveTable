# 龍岡分隊假表管理系統

專為消防分隊「做一休一」輪班制團隊設計的線上假表協作系統。支援 **A班** 與 **B班** 獨立運作，具備每日休假配額控管、順位假別系統、Google 身分驗證、即時雲端同步，並針對手機操作優化。

## 功能特色

- **A/B 班分流管理**：兩班人員名單、輪班規則與配額完全獨立，導覽列一鍵切換。
- **順位假別系統**：每位人員在當月的填寫順序自動編號，假表顯示如「林彥佑 補1」、「林彥佑 特2」，刪除後自動重排。
- **假別種類**：
  - 全天假（配額佔 1）：特、補、休、消、身、事、陪、公、病
  - 半天假（配額佔 0.5）：宿
- **彈性配額管理**：支援整數與 0.5 小數配額，modal 僅顯示剩餘配額允許的假別。
- **月份分區儲存**：每月每班獨立文件，切換月份不清空舊資料，每筆假單獨立寫入（非整包覆寫）。
- **即時協作**：Firebase Firestore 即時同步，多人同時填寫不互相覆蓋。
- **變更歷史**：所有新增、刪除、設定變更均記錄審計日誌，可在「歷史紀錄」頁面查閱。每次登入時自動清除逾 60 天的舊紀錄。
- **安全規則**：Firestore Security Rules 強制登入存取，假單寫入驗證操作者 email。
- **RWD 響應式設計**：假表橫向捲動、觸控友善按鈕。

## 技術棧

| 層級 | 技術 |
|------|------|
| 前端框架 | React 18 + TypeScript |
| 建置工具 | Vite |
| 樣式 | Tailwind CSS |
| 圖示 | Lucide React |
| 資料庫 | Firebase Firestore |
| 身分驗證 | Firebase Authentication (Google) |
| 測試 | Vitest + @testing-library/react |

## 快速開始

### 1. 安裝相依套件

```bash
npm install
```

### 2. 設定環境變數

在專案根目錄建立 `.env`：

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. 啟動開發伺服器

```bash
npm run dev
```

### 4. 建置與部署

```bash
npm run build
npm run deploy                          # GitHub Pages
firebase deploy --only firestore:rules  # Firestore 安全規則
```

## 操作說明

### 初始設定（每月一次）

1. 使用 Google 帳號登入
2. 在導覽列選擇班級（A 或 B）
3. 點擊「配額設定」：
   - 設定當月首日上班日（1 號或 2 號起）
   - 新增團隊人員名單（或從上月匯入）
   - 批量設定休假配額，再視需要單日微調
   - 可設定例外排班日

### 假表填寫

1. 切換至「假表填寫」
2. 在「我是：」選擇姓名
3. 點擊上班日格子的「+」按鈕
4. 選擇假別，按「確定新增」
5. 刪除：點擊自己假單上的「×」

### 歷史紀錄

點擊導覽列「歷史紀錄」，可查看最近 100 筆操作，支援班別、月份、操作類型篩選，並可展開查看變更前後內容。

## Firestore 資料結構

```
shift_scheduler/
  settings_{YYYY-MM}_{group}     # 每月每班設定
  {YYYY-MM}_{group}/
    entries/
      {memberName}_{date}_{order} # 每筆假單
  audit_logs_root/
    audit_logs/
      {autoId}                    # 審計日誌（60 天 TTL）
```

## 授權

此專案供龍岡分隊內部團隊協作使用。
