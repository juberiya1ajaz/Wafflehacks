import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyD-JyfuAj2L_iq27Rw2-S4IkpdbO-LjgR8",
  authDomain: "soldiers-shelter.firebaseapp.com",
  projectId: "soldiers-shelter",
  storageBucket: "soldiers-shelter.appspot.com",
  messagingSenderId: "907088013909",
  appId: "1:907088013909:web:57780b501424713896c2dc",
  measurementId: "G-PXWQWVX5FH"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export {firestore, auth, app}
