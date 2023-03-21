// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABTqAKcQW9b2oG3IHg4IHbMA--t6G567I",
  authDomain: "rj-39585.firebaseapp.com",
  projectId: "rj-39585",
  storageBucket: "rj-39585.appspot.com",
  messagingSenderId: "525217919483",
  appId: "1:525217919483:web:399c41aaf33edb74bd1b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
