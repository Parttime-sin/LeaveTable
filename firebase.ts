import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot, setDoc, Firestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, Auth, User } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { AppState } from './types';

// ------------------------------------------------------------------
// FIREBASE CONFIGURATION / FIREBASE 設定
// ------------------------------------------------------------------
// Using Cloud Firestore (Modular SDK)
// Keys are loaded from .env file for security
// ------------------------------------------------------------------

// Cast import.meta to any to avoid type errors when vite types are missing
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

// Basic validation to ensure keys exist
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  try {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    
    // Initialize Analytics (Optional)
    try {
      getAnalytics(app);
    } catch (e) {
      console.debug("Analytics not initialized");
    }
    
    // Initialize Cloud Firestore
    db = getFirestore(app);
    
    // Initialize Auth
    auth = getAuth(app);
    
    isConfigured = true;
    console.log("Firebase initialized successfully (Firestore & Auth)");
  } catch (e) {
    console.error("Firebase initialization failed:", e);
  }
} else {
  console.warn("Firebase configuration missing in environment variables.");
}

export const isFirebaseEnabled = () => isConfigured;
export { auth };

// Auth Helpers
const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async (): Promise<User> => {
  if (!auth) throw new Error("Firebase Auth not initialized");
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const logout = async () => {
  if (!auth) return;
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Logout failed", error);
  }
};

// Constants for Firestore Collection and Document
const COLLECTION_NAME = 'shift_scheduler';
const DOC_NAME = 'v1_data';

export const subscribeToData = (
  onData: (data: AppState | null) => void,
  onError: (error: Error) => void
) => {
  if (!isConfigured || !db) {
    console.warn("Firebase not configured, skipping subscription");
    return () => {};
  }

  const docRef = doc(db, COLLECTION_NAME, DOC_NAME);
  
  // Real-time listener using onSnapshot for Firestore
  const unsubscribe = onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        onData(docSnap.data() as AppState);
      } else {
        // Document doesn't exist yet
        onData(null); 
      }
    },
    (error) => {
      console.error("Firebase sync error:", error);
      onError(error);
    }
  );

  return unsubscribe;
};

export const saveDataToFirebase = async (data: AppState) => {
  if (!isConfigured || !db) {
    console.warn("Cannot save to Firebase: Not configured");
    return;
  }
  
  try {
    const docRef = doc(db, COLLECTION_NAME, DOC_NAME);
    // Use setDoc to overwrite the document with the new state
    await setDoc(docRef, data);
  } catch (e) {
    console.error("Error saving to Firestore:", e);
    throw e;
  }
};