import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyLgff2xhAorpLpinrHtqGW_t0qpfcXkw",
  authDomain: "quiz-website-3b5d6.firebaseapp.com",
  projectId: "quiz-website-3b5d6",
  storageBucket: "quiz-website-3b5d6.firebasestorage.app",
  messagingSenderId: "288945214262",
  appId: "1:288945214262:web:cc9e2f0e3b7e5259739997"
};

// Initialize Firebase (singleton pattern)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
