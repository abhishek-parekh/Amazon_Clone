// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBqRTBo7v-kv2V_CE13vWuSSd83cnAAUxg",
    authDomain: "challenge-bb98e.firebaseapp.com",
    projectId: "challenge-bb98e",
    storageBucket: "challenge-bb98e.appspot.com",
    messagingSenderId: "1041012864276",
    appId: "1:1041012864276:web:5fd7667fada849c3677e01",
    measurementId: "G-9YSHDTC0C3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };