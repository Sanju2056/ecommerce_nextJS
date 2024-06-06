import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCrOHbnOWnOEQ0QngkAI5YsbjOlg4D_m5Q",
  authDomain: "nextjs-ecommerce-78dc5.firebaseapp.com",
  projectId: "nextjs-ecommerce-78dc5",
  storageBucket: "nextjs-ecommerce-78dc5.appspot.com",
  messagingSenderId: "1030872829288",
  appId: "1:1030872829288:web:2365b0fd50f30965189add",
  measurementId: "G-BGBWLN3ZRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);