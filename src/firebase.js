import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAm3EJ_1Aq8MtC4TCqA9iW8DpOArIO_EYU",
  authDomain: "medination-258dd.firebaseapp.com",
  projectId: "medination-258dd",
  storageBucket: "medination-258dd.appspot.com",
  messagingSenderId: "271320668158",
  appId: "1:271320668158:web:d4529f640187d23290d2af",
  measurementId: "G-ZNFBYCRZ39"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
