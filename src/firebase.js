// import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyClx5uECR9PTIq3kcyAL6cZC2Z3C8OSrMQ",
  authDomain: "restaurants-app-2831a.firebaseapp.com",
  projectId: "restaurants-app-2831a",
  storageBucket: "restaurants-app-2831a.appspot.com",
  messagingSenderId: "222513564860",
  appId: "1:222513564860:web:8400c20f459984d13dd4b9",
  measurementId: "G-6HV1C3QJKN"
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const fireDB = getFirestore(app);
// export const fireauth = auth()

