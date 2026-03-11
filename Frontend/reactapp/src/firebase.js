// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth'; // Import Firebase authentication
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHVsdqt1nXKci4kIrnxS6K08LFLki7q0M",
  authDomain: "agriwebhub.firebaseapp.com",
  projectId: "agriwebhub",
  storageBucket: "agriwebhub.appspot.com",
  messagingSenderId: "502980385705",
  appId: "1:502980385705:web:b6ace344b3c7f24f8802b8",
  measurementId: "G-C1TNR5YEEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };