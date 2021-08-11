import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqbqQcvVxyTRUv1AyHjtg0fPaJ8sL2rr0",
  authDomain: "our-blog-30c68.firebaseapp.com",
  projectId: "our-blog-30c68",
  storageBucket: "our-blog-30c68.appspot.com",
  messagingSenderId: "987452810084",
  appId: "1:987452810084:web:0b72dfd76a7a65ae0f5071",
  measurementId: "G-51RNYKCPK5"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapShots: true });

export default firebase;