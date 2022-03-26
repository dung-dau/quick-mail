import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxn0OqrCtULVNyQ38fqhmbiEcXGwvE5-8",
    authDomain: "mail-app-d6bd1.firebaseapp.com",
    projectId: "mail-app-d6bd1",
    storageBucket: "mail-app-d6bd1.appspot.com",
    messagingSenderId: "892122778657",
    appId: "1:892122778657:web:2987af3910730b7383e760"
  };

initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };