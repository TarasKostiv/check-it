import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
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
const auth = firebase.auth();

export { db, auth };