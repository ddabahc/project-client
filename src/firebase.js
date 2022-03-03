import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJhxR3U-nzcce9_PIENuOEXd4QeC7skz4",
  authDomain: "e-commerce-5aa28.firebaseapp.com",
  projectId: "e-commerce-5aa28",
  storageBucket: "e-commerce-5aa28.appspot.com",
  messagingSenderId: "490538078026",
  appId: "1:490538078026:web:a3bb4a89cdc955f0993bb3",
  measurementId: "G-GS27NCPCRL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
