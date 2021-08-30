import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "manan-e93eb.firebaseapp.com",
  projectId: "manan-e93eb",
  storageBucket: "manan-e93eb.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-CT5E4QN1Z0"
}

if (!firebase.apps.length) {
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
  firebase.initializeApp(firebaseConfig)
}

export const googleAuth = new firebase.auth.GoogleAuthProvider()
export const facebookAuth = new firebase.auth.FacebookAuthProvider()
export const twitterAuth =new firebase.auth.TwitterAuthProvider()

export const auth = firebase.auth()
export const firestore = firebase.firestore()
