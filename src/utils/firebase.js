// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Comment this if not using Analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "netflix-gpt-watch-tv-shows.firebaseapp.com",
  projectId: "netflix-gpt-watch-tv-shows",
  storageBucket: "netflix-gpt-watch-tv-shows.appspot.com",
  messagingSenderId: "266002146761",
  appId: "1:266002146761:web:44ac232fa266e70988f418",
  measurementId: "G-H0MV1836LS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = getAuth(app); // Pass the app instance to getAuth
export const db = getFirestore(app); // Pass the app instance to getFirestore

// Optionally, initialize Analytics if needed
// const analytics = getAnalytics(app);

export default app;
