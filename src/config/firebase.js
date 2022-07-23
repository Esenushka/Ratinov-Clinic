import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDMVCziTsvGeBUXPz5HaQaT0WTL9ps8lto",
  authDomain: "ratinov-clinic.firebaseapp.com",
  projectId: "ratinov-clinic",
  storageBucket: "ratinov-clinic.appspot.com",
  messagingSenderId: "325525592288",
  appId: "1:325525592288:web:7684f1c7ccedbfda38d885",
  measurementId: "G-EVKDC7YB9K"
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

