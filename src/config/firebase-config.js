// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTfaBxxzPnrxYIlfgjGaWvavqVsZ-SmFo",
  authDomain: "facebook-91c3d.firebaseapp.com",
  projectId: "facebook-91c3d",
  storageBucket: "facebook-91c3d.appspot.com",
  messagingSenderId: "897696081728",
  appId: "1:897696081728:web:0ea88412af0fa953db3ca5",
  measurementId: "G-K3VZX8E5N1",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
