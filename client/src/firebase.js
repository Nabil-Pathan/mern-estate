// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9f521.firebaseapp.com",
  projectId: "mern-estate-9f521",
  storageBucket: "mern-estate-9f521.appspot.com",
  messagingSenderId: "822796611467",
  appId: "1:822796611467:web:434997457f18a6d159498e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);