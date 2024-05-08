// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZsGfeTjp0SXPOS9EXghxqdgBsZARcScA",
  authDomain: "domonatura-a3c82.firebaseapp.com",
  projectId: "domonatura-a3c82",
  storageBucket: "domonatura-a3c82.appspot.com",
  messagingSenderId: "805788481130",
  appId: "1:805788481130:web:c0a7d8b80ea4ae295afc13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
