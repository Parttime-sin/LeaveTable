# 龍岡分隊假表管理系統

專為消防分隊或「做一休一」輪班制團隊設計的線上假表協作系統。本系統支援 **A班** 與 **B班** 獨立運作，具備每日休假名額控管、多種假別設定、Google 身分驗證、即時雲端同步，並針對手機操作進行介面優化。

## ✨ 功能特色

*   **A/B 班分流管理**：
    *   上方導覽列可快速切換 **A班 (Indigo)** 與 **B班 (Teal)**。
    *   兩班的人員名單、輪班規則與休假配額完全獨立，互不干擾。
*   **安全身分驗證**：整合 Google 登入機制，確保僅有授權人員可存取與編輯假表（雲端模式）。
*   **輪班模式支援**：內建單/雙日輪班邏輯計算，自動標示上班日與休假日（可設定 1 號或 2 號為首日上班）。
*   **彈性配額管理**：
    *   可設定每日可休人數上限。
    *   支援小數點配額（例如 0.5），用於控管「外宿」等特殊半日假別。
    *   提供整月批量設定與單日細部調整功能。
*   **假別系統**：
    *   全日假：特休 (1-3)、補休 (1-4)、年休 (1-4)。
    *   半日假：外宿。
*   **即時協作 (Firebase)**：支援多人同時在線編輯，資料即時同步更新。
*   **RWD 響應式設計**：針對手機操作優化，支援表格橫向捲動、字體放大與直覺的點擊填寫。

## 🛠️ 技術棧

*   **核心框架**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **建置工具**: [Vite](https://vitejs.dev/)
*   **樣式庫**: [Tailwind CSS](https://tailwindcss.com/) (CDN 載入)
*   **圖示庫**: [Lucide React](https://lucide.dev/)
*   **後端/資料庫**: [Firebase Firestore](https://firebase.google.com/)
*   **身分驗證**: [Firebase Authentication](https://firebase.google.com/docs/auth)

## 🚀 快速開始

### 1. 安裝相依套件

```bash
npm install
```

### 2. 設定環境變數 (.env)

請在專案根目錄建立一個 `.env` 檔案，並填入您的 Firebase 專案設定資訊 (請替換為您的實際數值)：

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

瀏覽器將自動開啟預覽頁面 (通常是 http://localhost:5173)。

### 4. 建置生產版本

```bash
npm run build
```

## ⚙️ 設定與操作說明

### 系統初始化流程

首次進入系統時，若已連結 Firebase，請先**使用 Google 帳號登入**。

#### 1. 選擇班級
在上方導覽列中央，點選 **「A班」** 或 **「B班」** 切換至欲設定的班級環境。

#### 2. 配額設定 (Settings)
點擊導覽列的 **「配額設定」**：
1.  **設定當月首日上班日**：選擇該班級本月是逢 **1號** 或 **2號** 上班。
2.  **新增團隊人員**：在左側面板輸入該班級的隊員姓名並新增。
3.  **設定休假配額**：
    *   **批量設定**：輸入數字（如 2）並套用，設定所有上班日的可休人數。
    *   **單日微調**：點擊右側日曆的特定日期，可單獨修改該日配額（如設為 0.5 僅供外宿，或清除配額）。

#### 3. 假表填寫 (Filling)
切換至 **「假表填寫」** 頁面：
1.  **選擇身分**：在上方「我是：」下拉選單中選擇您的姓名。
2.  **填寫假單**：
    *   行事曆上白底為上班日，點擊欲休假的日期。
    *   若當日配額足夠，選擇假別（特/補/休/外宿）並確認。
    *   若當日配額已滿，系統將會標示紅色並顯示警示。
3.  **儲存**：操作完成後點擊右上角的「儲存」按鈕同步資料。

## 📱 手機版操作

*   **橫向捲動**：假表區域支援左右滑動，方便檢視整週/整月排班。
*   **大字體優化**：填寫介面針對觸控優化，按鈕與文字加大，避免誤觸。

## 📄 授權

此專案僅供龍岡分隊內部團隊協作使用。