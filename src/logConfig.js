// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClx5uECR9PTIq3kcyAL6cZC2Z3C8OSrMQ",
  authDomain: "restaurants-app-2831a.firebaseapp.com",
  projectId: "restaurants-app-2831a",
  storageBucket: "restaurants-app-2831a.appspot.com",
  messagingSenderId: "222513564860",
  appId: "1:222513564860:web:8400c20f459984d13dd4b9",
  measurementId: "G-6HV1C3QJKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
