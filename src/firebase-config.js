// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore}from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXeXOj4OglMFH399Lczg5WjJG3LbOfO7E",
  authDomain: "library-99fdc.firebaseapp.com",
  projectId: "library-99fdc",
  storageBucket: "library-99fdc.appspot.com",
  messagingSenderId: "53689244825",
  appId: "1:53689244825:web:e08222e177f7da8dfe6c08",
  measurementId: "G-3ZV12L5KXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
