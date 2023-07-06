// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD8JMqd_Tdi725FOfEthGvn5-yP_PWKq0M",

  authDomain: "bug-tracker-e458a.firebaseapp.com",

  projectId: "bug-tracker-e458a",

  storageBucket: "bug-tracker-e458a.appspot.com",

  messagingSenderId: "522597812648",

  appId: "1:522597812648:web:ae7061bad6e4e6de80359d",

  measurementId: "G-VGSY11JY3H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
