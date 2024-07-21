// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);