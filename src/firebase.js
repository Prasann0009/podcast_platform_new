// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgT9FdQyXIdrPLeIvHxwsHB6JM0YyGE7I",
  authDomain: "podcast-platform-react-a7c8c.firebaseapp.com",
  projectId: "podcast-platform-react-a7c8c",
  storageBucket: "podcast-platform-react-a7c8c.appspot.com",
  messagingSenderId: "798464577198",
  appId: "1:798464577198:web:1c713b70a44a36d193e73f",
  measurementId: "G-326VVXVEQN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
