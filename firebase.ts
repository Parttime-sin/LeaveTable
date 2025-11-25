import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmo7Sla5tT5x3M0Y_wRxgm3YTA79YfdRw",
    authDomain: "leavetabledatabase.firebaseapp.com",
    databaseURL: "https://leavetabledatabase-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "leavetabledatabase",
    storageBucket: "leavetabledatabase.firebasestorage.app",
    messagingSenderId: "1041146346576",
    appId: "1:1041146346576:web:38c4e617323b13d3c0a555",
    measurementId: "G-VEB8V17591"
};

// Initialize Firebase (Singleton pattern to avoid re-initialization errors)
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Export the database instance
export const db = app.database();