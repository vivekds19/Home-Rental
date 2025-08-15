// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-rental-5f88b.firebaseapp.com",
  projectId: "home-rental-5f88b",
  storageBucket: "home-rental-5f88b.firebasestorage.app",
  messagingSenderId: "481589726157",
  appId: "1:481589726157:web:a1bffcb4fde1981d175284"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);