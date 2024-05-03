// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3121d.firebaseapp.com",
  projectId: "mern-estate-3121d",
  storageBucket: "mern-estate-3121d.appspot.com",
  messagingSenderId: "378179318720",
  appId: "1:378179318720:web:fff44768ff588861bbce25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);