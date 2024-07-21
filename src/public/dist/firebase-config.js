// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO4j4SIcDIJWAPRUNN9T3LnpbmI7tHe1o",
  authDomain: "women-shealthbreastselfexam.firebaseapp.com",
  projectId: "women-shealthbreastselfexam",
  storageBucket: "women-shealthbreastselfexam.appspot.com",
  messagingSenderId: "131810140827",
  appId: "1:131810140827:web:73dac5659074a22b531c3e",
  measurementId: "G-BNE354WW9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
