import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCJwVqGRRZeGWMyOLaFV-QzMz2VUJaP_78",
  authDomain: "ratinov-clinic-401b0.firebaseapp.com",
  projectId: "ratinov-clinic-401b0",
  storageBucket: "ratinov-clinic-401b0.appspot.com",
  messagingSenderId: "150132533358",
  appId: "1:150132533358:web:00559ebafa39dabaa4de7f",
  measurementId: "G-XS7FSK6P1Y"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
export const db = firebase.firestore();
export const storageRef = firebase.storage();

const fire = firebase;
export default fire;

