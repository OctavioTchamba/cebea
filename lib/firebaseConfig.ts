// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "cebea-5fb4d.firebaseapp.com",
  projectId: "cebea-5fb4d",
  storageBucket: "cebea-5fb4d.firebasestorage.app",
  messagingSenderId: "850489470618",
  appId: "1:850489470618:web:662817da8c4cad9a727923",
  measurementId: "G-P87SCZ67QD"
};

// Initialize Firebase
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Auth (works on both client and server)
export const auth: Auth = getAuth(app);

// Initialize Firestore
export const db: Firestore = getFirestore(app);



export { app };