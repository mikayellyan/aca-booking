import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgJPUG66NdyXOoizSnaVnj7nFmfA1eURI",
  authDomain: "booking-auth-be041.firebaseapp.com",
  projectId: "booking-auth-be041",
  storageBucket: "booking-auth-be041.appspot.com",
  messagingSenderId: "100783049744",
  appId: "1:100783049744:web:3dfcd6116f0da583bace95",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
