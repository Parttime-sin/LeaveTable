/**
 * Firebase Cloud Functions for LeaveTable
 * 監聽 Firestore 文件變動並記錄審計日誌
 */

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

/**
 * 監聽 shift_scheduler collection 下所有文件的變動
 * 涵蓋：建立、更新、刪除
 */
export const traceDatabaseChanges = functions.firestore
  .document("shift_scheduler/{docId}")
  .onWrite((change, context) => {
    const docId = context.params.docId;
    const timestamp = context.timestamp;

    // 判斷操作類型
    let operationType = "";
    if (!change.before.exists) {
      operationType = "CREATE (新增)";
    } else if (!change.after.exists) {
      operationType = "DELETE (刪除)";
    } else {
      operationType = "UPDATE (更新)";
    }

    // 取得變更前後的資料
    const beforeData = change.before.data() || {};
    const afterData = change.after.data() || {};

    // 輸出日誌（會自動同步到 Google Cloud Logs）
    console.log(`[Audit Log] 文件ID: ${docId} | 動作: ${operationType}`);
    console.log(`執行時間: ${timestamp}`);

    if (operationType === "UPDATE (更新)") {
      console.log("變更前:", JSON.stringify(beforeData));
      console.log("變更後:", JSON.stringify(afterData));
    } else if (operationType === "CREATE (新增)") {
      console.log("新增資料:", JSON.stringify(afterData));
    } else if (operationType === "DELETE (刪除)") {
      console.log("刪除資料:", JSON.stringify(beforeData));
    }

    return null;
  });

/**
 * 健康檢查端點
 */
export const healthCheck = functions.https.onRequest((_req, res) => {
  res.send("LeaveTable Functions OK");
});
