// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkChK_PGotQPu6mkfk-Y6jujTIHqK9nSU",
  authDomain: "new-auto-note.firebaseapp.com",
  projectId: "new-auto-note",
  storageBucket: "new-auto-note.appspot.com",
  messagingSenderId: "1080882791232",
  appId: "1:1080882791232:web:8b03d29248bfb6f2e5f0a5",
  measurementId: "G-BZB36LVT9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
