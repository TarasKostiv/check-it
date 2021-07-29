// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyCZQ3E_bZDnRBwlel2YQ_jSGPjKaLsHY0Q",
    authDomain: "check-it-99430.firebaseapp.com",
    databaseURL: "https://check-it-99430-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "check-it-99430",
    storageBucket: "check-it-99430.appspot.com",
    messagingSenderId: "333811384640",
    appId: "1:333811384640:web:2a0ae61a0790cd6d98baa5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };