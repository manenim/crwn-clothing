import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCevIR4Ty6KSm23wIXKefOVn7gjF79In1k",
    authDomain: "crwn-db-cefa2.firebaseapp.com",
    projectId: "crwn-db-cefa2",
    storageBucket: "crwn-db-cefa2.appspot.com",
    messagingSenderId: "385977594035",
    appId: "1:385977594035:web:bd8a3a4a1acea9ffc8c0c6",
    measurementId: "G-27QNZEBRXH"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase