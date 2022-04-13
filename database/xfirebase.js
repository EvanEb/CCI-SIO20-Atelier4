// database/firebaseDb.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
const firebaseConfig = {
  apiKey: "AIzaSyDejDWJEeFyKtMBjKfshk0Xl_suSblojQE",
  authDomain: "cci-atelier4.firebaseapp.com",
  projectId: "cci-atelier4",
  storageBucket: "cci-atelier4.appspot.com",
  messagingSenderId: "1042304278172",
  appId: "1:1042304278172:web:47c554b99bbceb526d5759"
};
export default firebase.initializeApp(firebaseConfig);