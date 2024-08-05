// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRyDQ3FTQW_xC2OCQ2aO_91Yfmc3egqms",
  authDomain: "netflix-gpt-watch-tv-shows.firebaseapp.com",
  projectId: "netflix-gpt-watch-tv-shows",
  storageBucket: "netflix-gpt-watch-tv-shows.appspot.com",
  messagingSenderId: "266002146761",
  appId: "1:266002146761:web:44ac232fa266e70988f418",
  measurementId: "G-H0MV1836LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);