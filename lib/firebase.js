import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyArJy-CLawUxQEUyqZFhQzp7oo1O0aSdkQ",
  authDomain: "manan-e93eb.firebaseapp.com",
  projectId: "manan-e93eb",
  storageBucket: "manan-e93eb.appspot.com",
  messagingSenderId: "58363865672",
  appId: "1:58363865672:web:be8f80cf86108e1e4c067d",
  measurementId: "G-CT5E4QN1Z0"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
