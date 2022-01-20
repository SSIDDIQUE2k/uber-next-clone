// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3Kv2LkceKyu-84XjhIUkpGHm2rCwrx6s",
    authDomain: "ubernextclonelive.firebaseapp.com",
    projectId: "ubernextclonelive",
    storageBucket: "ubernextclonelive.appspot.com",
    messagingSenderId: "627378685019",
    appId: "1:627378685019:web:ebf37f34f119f612242b7e",
    measurementId: "G-PV200K7FTH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}