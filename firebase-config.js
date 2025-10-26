// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClMUa9ciRdgp0n_h-zbfqrJxcRbbu6G7A",
  authDomain: "secretsanta-f2e1b.firebaseapp.com",
  projectId: "secretsanta-f2e1b",
  storageBucket: "secretsanta-f2e1b.firebasestorage.app",
  messagingSenderId: "901936434273",
  appId: "1:901936434273:web:53581ec974c5d4be8b2e20",
  measurementId: "G-VEVM33PCK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
