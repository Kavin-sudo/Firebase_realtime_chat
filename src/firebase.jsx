
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOM87ZkmW28aw9q8ih3WQb027fbSLmrDk",
  authDomain: "instantchat-8b6df.firebaseapp.com",
  projectId: "instantchat-8b6df",
  storageBucket: "instantchat-8b6df.appspot.com",
  messagingSenderId: "887502954822",
  appId: "1:887502954822:web:e666bb6c801a505a4e4547"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
