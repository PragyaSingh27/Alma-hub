// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqD1_aJgjlj5EBxC125ZyDSO-j9RFA_Bw",
  authDomain: "alma-hub-53ebe.firebaseapp.com",
  projectId: "alma-hub-53ebe",
  storageBucket: "alma-hub-53ebe.appspot.com",
  messagingSenderId: "824994344595",
  appId: "1:824994344595:web:04139ce3e79d6ff3b5a766",
  measurementId: "G-WVEKHZH9BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider=new GoogleAuthProvider()

export {auth, provider};