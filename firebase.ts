import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import { AppState } from './types';

// ------------------------------------------------------------------
// FIREBASE CONFIGURATION / FIREBASE 設定
// ------------------------------------------------------------------
// Using Cloud Firestore (via Compat API)
// ------------------------------------------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyDT7WprmgPSa_rONLEUkr9LWSZeHClpTFM",
  authDomain: "leavetable-fd826.firebaseapp.com",
  projectId: "leavetable-fd826",
  storageBucket: "leavetable-fd826.firebasestorage.app",
  messagingSenderId: "844876295872",
  appId: "1:844876295872:web:4b3cd98e646846f0868725"
};

let app: firebase.app.App;
let db: firebase.firestore.Firestore | null = null;
let isConfigured = false;

try {
  // Initialize Firebase (Compat)
  app = firebase.initializeApp(firebaseConfig);
  
  // Initialize Analytics (Optional)
  try {
    firebase.analytics();
  } catch (e) {
    console.debug("Analytics not initialized");
  }
  
  // Initialize Cloud Firestore
  db = firebase.firestore();
  
  isConfigured = true;
  console.log("Firebase Cloud Firestore initialized successfully");
} catch (e) {
  console.error("Firebase initialization failed:", e);
}

export const isFirebaseEnabled = () => isConfigured;

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

  const docRef = db.collection(COLLECTION_NAME).doc(DOC_NAME);
  
  // Real-time listener using onSnapshot for Firestore
  const unsubscribe = docRef.onSnapshot(
    (doc) => {
      if (doc.exists) {
        // Firestore data() returns the object
        onData(doc.data() as AppState);
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
    // Use .set() to overwrite the document with the new state
    await db.collection(COLLECTION_NAME).doc(DOC_NAME).set(data);
  } catch (e) {
    console.error("Error saving to Firestore:", e);
    throw e;
  }
};