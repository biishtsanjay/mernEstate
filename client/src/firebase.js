// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fd4b2.firebaseapp.com",
  projectId: "mern-estate-fd4b2",
  storageBucket: "mern-estate-fd4b2.appspot.com",
  messagingSenderId: "1002288361724",
  appId: "1:1002288361724:web:e95fa92903277d67c86779",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
