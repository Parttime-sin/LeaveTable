import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot, setDoc, Firestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut as firebaseSignOut, Auth, User } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { AppState } from './types';
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

// Keys for localStorage
const REDIRECT_PENDING_KEY = 'auth_redirect_pending';
const REDIRECT_TIMESTAMP_KEY = 'auth_redirect_timestamp';
const MAX_REDIRECT_WAIT_TIME = 10 * 60 * 1000; // 10 minutes expiry

/**
 * Detect Mobile or In-App Browsers (LINE, FB, IG).
 * Used mainly for logging now, since we use a unified Popup-First strategy.
 */
export const detectMobile = (): boolean => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Line|FBAN|FBAV|Instagram|MicroMessenger/i.test(ua);
};

/**
 * [Flag Write]
 * Set ONLY before triggering a redirect.
 */
const setRedirectFlag = () => {
  addLog("[Auth] Setting redirect flag...", 'info');
  localStorage.setItem(REDIRECT_PENDING_KEY, 'true');
  localStorage.setItem(REDIRECT_TIMESTAMP_KEY, Date.now().toString());
};

/**
 * [Flag Clear]
 * Must be called after checking result or on error to prevent loops.
 */
export const clearRedirectFlag = () => {
  if (localStorage.getItem(REDIRECT_PENDING_KEY)) {
    addLog("[Auth] Clearing redirect flag.", 'info');
    localStorage.removeItem(REDIRECT_PENDING_KEY);
    localStorage.removeItem(REDIRECT_TIMESTAMP_KEY);
  }
};

/**
 * [Flag Read]
 * Checks if a redirect is expected AND if the request is fresh (< 10 mins).
 */
export const isRedirectPending = (): boolean => {
  const isPending = localStorage.getItem(REDIRECT_PENDING_KEY) === 'true';
  const timestampStr = localStorage.getItem(REDIRECT_TIMESTAMP_KEY);
  
  if (!isPending) return false;

  // Validate Timestamp
  if (timestampStr) {
    const timestamp = parseInt(timestampStr, 10);
    const now = Date.now();
    
    // Safety: If data is from the future or too old (>10 mins), discard it.
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

/**
 * Core Login Function (Popup Only Strategy)
 * 
 * Logic:
 * 1. Always try signInWithPopup.
 * 2. If forced (e.g. debug), use Redirect.
 * 3. NO automatic fallback to Redirect to avoid loops/unwanted behavior.
 */
export const loginWithGoogle = async (forceRedirect: boolean = false): Promise<User | void> => {
  if (!auth) throw new Error("Firebase Auth not initialized");

  const isMobile = detectMobile();
  addLog(`[Login] Start. Mobile: ${isMobile}. Strategy: Popup Only`);

  // Allow forcing redirect (debug purposes or specific user request)
  if (forceRedirect) {
    addLog("[Login] Forcing Redirect...", 'info');
    setRedirectFlag();
    await signInWithRedirect(auth, googleProvider);
    return;
  }

  try {
    // --- ATTEMPT: POPUP ---
    const result = await signInWithPopup(auth, googleProvider);
    addLog(`[Login] Popup Success: ${result.user.email}`, 'success');
    return result.user;

  } catch (error: any) {
    console.warn("Popup failed:", error);
    addLog(`[Login] Popup failed: ${error.code || error.message}`, 'error');
    
    // Explicitly throw error. No auto-fallback.
    throw error;
  }
};

/**
 * Check for Redirect Result
 * Should be called once on App mount.
 */
export const checkRedirectResult = async (): Promise<User | null> => {
  if (!auth) return null;

  // Gatekeeper: Only check if we are actually waiting for it.
  if (!isRedirectPending()) {
    return null;
  }

  addLog("[Auth] Detected pending redirect. Checking result...", 'info');

  try {
    const result = await getRedirectResult(auth);
    
    // CRITICAL: Clear flag immediately after getting result.
    clearRedirectFlag();

    if (result) {
      addLog(`[Auth] Redirect Success: ${result.user.email}`, 'success');
      return result.user;
    } else {
      addLog("[Auth] Redirect returned null (User cancelled or Session lost).", 'warn');
      return null;
    }
  } catch (error: any) {
    clearRedirectFlag(); // Ensure cleanup on error
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
// DATA SYNC
// ------------------------------------------------------------------
const COLLECTION_NAME = 'shift_scheduler';
const DOC_NAME = 'v1_data';

export const subscribeToData = (
  onData: (data: AppState | null) => void,
  onError: (error: Error) => void
) => {
  if (!isConfigured || !db) return () => {};
  const docRef = doc(db, COLLECTION_NAME, DOC_NAME);
  return onSnapshot(docRef, 
    (docSnap) => onData(docSnap.exists() ? docSnap.data() as AppState : null),
    (error) => {
      console.error("Sync error:", error);
      onError(error);
    }
  );
};

export const saveDataToFirebase = async (data: AppState) => {
  if (!isConfigured || !db) return;
  const docRef = doc(db, COLLECTION_NAME, DOC_NAME);
  await setDoc(docRef, data);
};