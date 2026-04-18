import { initializeApp, FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  collection,
  onSnapshot,
  setDoc,
  deleteDoc,
  getDocs,
  Firestore,
  Unsubscribe,
} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut as firebaseSignOut, Auth, User } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { GroupType, MonthlySettings, MonthlyLeaveEntry } from './types';
import {
  ROOT_COLLECTION,
  settingsDocId,
  leavesMonthGroupId,
  leaveEntryId,
} from './utils/firestoreSchema';
import { addLog } from './logger';

// ------------------------------------------------------------------
// FIREBASE CONFIGURATION
// ------------------------------------------------------------------
const env = (import.meta as any).env;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
};

let app: FirebaseApp;
let db: Firestore | null = null;
let auth: Auth | null = null;
let isConfigured = false;

if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  try {
    app = initializeApp(firebaseConfig);
    try { getAnalytics(app); } catch (e) { /* ignore */ }
    db = getFirestore(app);
    auth = getAuth(app);
    isConfigured = true;
    console.log("Firebase initialized successfully");
    addLog("Firebase SDK initialized", 'success');
  } catch (e) {
    console.error("Firebase initialization failed:", e);
    addLog(`Firebase init failed: ${(e as Error).message}`, 'error');
  }
} else {
  console.warn("Firebase configuration missing.");
  addLog("Firebase config missing", 'warn');
}

export const isFirebaseEnabled = () => isConfigured;
export { auth };

// ------------------------------------------------------------------
// AUTH HELPERS & FLAG MANAGEMENT
// ------------------------------------------------------------------

const googleProvider = new GoogleAuthProvider();

const REDIRECT_PENDING_KEY = 'auth_redirect_pending';
const REDIRECT_TIMESTAMP_KEY = 'auth_redirect_timestamp';
const MAX_REDIRECT_WAIT_TIME = 10 * 60 * 1000;

export const detectMobile = (): boolean => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Line|FBAN|FBAV|Instagram|MicroMessenger/i.test(ua);
};

const setRedirectFlag = () => {
  addLog("[Auth] Setting redirect flag...", 'info');
  localStorage.setItem(REDIRECT_PENDING_KEY, 'true');
  localStorage.setItem(REDIRECT_TIMESTAMP_KEY, Date.now().toString());
};

export const clearRedirectFlag = () => {
  if (localStorage.getItem(REDIRECT_PENDING_KEY)) {
    addLog("[Auth] Clearing redirect flag.", 'info');
    localStorage.removeItem(REDIRECT_PENDING_KEY);
    localStorage.removeItem(REDIRECT_TIMESTAMP_KEY);
  }
};

export const isRedirectPending = (): boolean => {
  const isPending = localStorage.getItem(REDIRECT_PENDING_KEY) === 'true';
  const timestampStr = localStorage.getItem(REDIRECT_TIMESTAMP_KEY);

  if (!isPending) return false;

  if (timestampStr) {
    const timestamp = parseInt(timestampStr, 10);
    const now = Date.now();

    if (isNaN(timestamp) || now - timestamp > MAX_REDIRECT_WAIT_TIME) {
      addLog("[Auth] Redirect flag expired or invalid. Clearing.", 'warn');
      clearRedirectFlag();
      return false;
    }
  } else {
    clearRedirectFlag();
    return false;
  }

  return true;
};

export const loginWithGoogle = async (forceRedirect: boolean = false): Promise<User | void> => {
  if (!auth) throw new Error("Firebase Auth not initialized");

  const isMobile = detectMobile();
  addLog(`[Login] Start. Mobile: ${isMobile}. Strategy: Popup Only`);

  if (forceRedirect) {
    addLog("[Login] Forcing Redirect...", 'info');
    setRedirectFlag();
    await signInWithRedirect(auth, googleProvider);
    return;
  }

  try {
    const result = await signInWithPopup(auth, googleProvider);
    addLog(`[Login] Popup Success: ${result.user.email}`, 'success');
    return result.user;
  } catch (error: any) {
    console.warn("Popup failed:", error);
    addLog(`[Login] Popup failed: ${error.code || error.message}`, 'error');
    throw error;
  }
};

export const checkRedirectResult = async (): Promise<User | null> => {
  if (!auth) return null;
  if (!isRedirectPending()) return null;

  addLog("[Auth] Detected pending redirect. Checking result...", 'info');

  try {
    const result = await getRedirectResult(auth);
    clearRedirectFlag();

    if (result) {
      addLog(`[Auth] Redirect Success: ${result.user.email}`, 'success');
      return result.user;
    } else {
      addLog("[Auth] Redirect returned null (User cancelled or Session lost).", 'warn');
      return null;
    }
  } catch (error: any) {
    clearRedirectFlag();
    console.error("Check Redirect Error:", error);
    addLog(`[Auth] Check Redirect Error: ${error.message}`, 'error');
    return null;
  }
};

export const logout = async () => {
  if (!auth) return;
  try {
    await firebaseSignOut(auth);
    clearRedirectFlag();
    addLog("User logged out", 'info');
  } catch (error) {
    console.error("Logout failed", error);
    addLog(`Logout error: ${(error as any).message}`, 'error');
  }
};

// ------------------------------------------------------------------
// DATA SYNC — PER-MONTH PARTITIONED (schemaVersion 2)
// ------------------------------------------------------------------

/**
 * Subscribe to a month+group's settings document.
 * Returns an unsubscribe function. Never throws synchronously.
 */
export const subscribeMonthSettings = (
  monthKey: string,
  group: GroupType,
  onData: (settings: MonthlySettings | null) => void,
  onError: (error: Error) => void
): Unsubscribe => {
  if (!isConfigured || !db) return () => {};
  const ref = doc(db, ROOT_COLLECTION, settingsDocId(monthKey, group));
  return onSnapshot(
    ref,
    (snap) => onData(snap.exists() ? (snap.data() as MonthlySettings) : null),
    (err) => {
      console.error('subscribeMonthSettings error:', err);
      onError(err);
    }
  );
};

/**
 * Subscribe to leave entries of a month+group.
 * Path: shift_scheduler/{docId}/leaves/{monthGroup}/entries/{entryId}
 */
export const subscribeMonthEntries = (
  monthKey: string,
  group: GroupType,
  onData: (entries: MonthlyLeaveEntry[]) => void,
  onError: (error: Error) => void
): Unsubscribe => {
  if (!isConfigured || !db) return () => {};
  const entriesRef = collection(
    db,
    ROOT_COLLECTION,
    leavesMonthGroupId(monthKey, group),
    'entries'
  );
  return onSnapshot(
    entriesRef,
    (snap) => {
      const list: MonthlyLeaveEntry[] = [];
      snap.forEach((d) => list.push(d.data() as MonthlyLeaveEntry));
      onData(list);
    },
    (err) => {
      console.error('subscribeMonthEntries error:', err);
      onError(err);
    }
  );
};

/** Write (or create) a month+group settings document. */
export const saveMonthSettings = async (
  settings: MonthlySettings,
  userEmail: string | null
): Promise<void> => {
  if (!isConfigured || !db) return;
  const ref = doc(db, ROOT_COLLECTION, settingsDocId(settings.monthKey, settings.group));
  const payload: MonthlySettings = {
    ...settings,
    schemaVersion: 2,
    updatedAt: Date.now(),
    updatedBy: userEmail ?? 'unknown',
  };
  await setDoc(ref, payload);
};

/** Add or overwrite a single leave entry. */
export const saveLeaveEntry = async (
  entry: MonthlyLeaveEntry,
  userEmail: string | null
): Promise<void> => {
  if (!isConfigured || !db) return;
  const ref = doc(
    db,
    ROOT_COLLECTION,
    leavesMonthGroupId(entry.monthKey, entry.group),
    'entries',
    leaveEntryId(entry.memberName, entry.date)
  );
  const payload: MonthlyLeaveEntry = {
    ...entry,
    updatedAt: Date.now(),
    updatedBy: userEmail ?? 'unknown',
  };
  await setDoc(ref, payload);
};

/** Delete a single leave entry by member+date. */
export const deleteLeaveEntry = async (
  monthKey: string,
  group: GroupType,
  memberName: string,
  date: string
): Promise<void> => {
  if (!isConfigured || !db) return;
  const ref = doc(
    db,
    ROOT_COLLECTION,
    leavesMonthGroupId(monthKey, group),
    'entries',
    leaveEntryId(memberName, date)
  );
  await deleteDoc(ref);
};

/** One-shot fetch of month entries (used for local mode init / diagnostics). */
export const fetchMonthEntriesOnce = async (
  monthKey: string,
  group: GroupType
): Promise<MonthlyLeaveEntry[]> => {
  if (!isConfigured || !db) return [];
  const entriesRef = collection(
    db,
    ROOT_COLLECTION,
    leavesMonthGroupId(monthKey, group),
    'entries'
  );
  const snap = await getDocs(entriesRef);
  const list: MonthlyLeaveEntry[] = [];
  snap.forEach((d) => list.push(d.data() as MonthlyLeaveEntry));
  return list;
};
