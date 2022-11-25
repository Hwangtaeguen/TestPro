// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2YejAsFeqd1M-DL0DDVSnpUfvMS6qwwc",
  authDomain: "mobileproject-178a6.firebaseapp.com",
  databaseURL: "https://mobileproject-178a6-default-rtdb.firebaseio.com",
  projectId: "mobileproject-178a6",
  storageBucket: "mobileproject-178a6.appspot.com",
  messagingSenderId: "966275796342",
  appId: "1:966275796342:web:26bba15b0b58249f043e57",
  measurementId: "G-P7FCEFRD9K"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = initializeFirestore(app,{
    experimentalForceLongPolling:true,
});

export { auth,db }

