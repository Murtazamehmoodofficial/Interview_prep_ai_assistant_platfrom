// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCahwiOhFvTyUmtqSCa9AFv4oRXEQKjaTw",
    authDomain: "prepwild.firebaseapp.com",
    projectId: "prepwild",
    storageBucket: "prepwild.firebasestorage.app",
    messagingSenderId: "1020911502335",
    appId: "1:1020911502335:web:23dc49f0458a31b074ddca",
    measurementId: "G-LYWFPLF3KZ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);