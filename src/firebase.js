import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrBmn2kRdkVBEaxQbrsuwQSTB7M1NLuQk",
    authDomain: "fb-clone-4df3a.firebaseapp.com",
    projectId: "fb-clone-4df3a",
    storageBucket: "fb-clone-4df3a.appspot.com",
    messagingSenderId: "1086230635845",
    appId: "1:1086230635845:web:b18b748d16874dc94f4a2c",
    measurementId: "G-KJDJN1FQ1E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;