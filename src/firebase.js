import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDm-PhIQrsmiq5L9ZILzygbfhSf7g6bHbU",
    authDomain: "clone-e2c61.firebaseapp.com",
    projectId: "clone-e2c61",
    storageBucket: "clone-e2c61.appspot.com",
    messagingSenderId: "456846740273",
    appId: "1:456846740273:web:a2aac1205fb3ce289d7e10"
};

initializeApp(firebaseConfig)
const db = getFirestore()

export { db };