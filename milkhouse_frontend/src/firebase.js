// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo58nPT9fKKmHl57RLne5BuGxCUAncju0",
  authDomain: "milk-house.firebaseapp.com",
  projectId: "milk-house",
  storageBucket: "milk-house.appspot.com",
  messagingSenderId: "707480337953",
  appId: "1:707480337953:web:335b666b7fa4994f1c6d60",
  measurementId: "G-H6MMHEQB7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};