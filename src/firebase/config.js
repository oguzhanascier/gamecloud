import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";

const firebaseConfig = {

    apiKey: "AIzaSyDFVqNoH3zchuEHkAbdqdVpgQLuheBE-CQ",

    authDomain: "blog-app-7cc8a.firebaseapp.com",

    databaseURL: "https://blog-app-7cc8a-default-rtdb.firebaseio.com",

    projectId: "blog-app-7cc8a",

    storageBucket: "blog-app-7cc8a.appspot.com",

    messagingSenderId: "291121184274",

    appId: "1:291121184274:web:440e17c5e5f7581fd122cb",

    measurementId: "G-NLDKV13V8W"

};

firebase.initializeApp(firebaseConfig)
const firestoreRef = firebase.firestore()
const authRef = firebase.auth()

export {firestoreRef, authRef}