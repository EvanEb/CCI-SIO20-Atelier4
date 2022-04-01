// database/firebaseDb.js
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDejDWJEeFyKtMBjKfshk0Xl_suSblojQE",
  authDomain: "cci-atelier4.firebaseapp.com",
  projectId: "cci-atelier4",
  storageBucket: "cci-atelier4.appspot.com",
  messagingSenderId: "1042304278172",
  appId: "1:1042304278172:web:47c554b99bbceb526d5759"
};

firebase.initializeApp(firebaseConfig);
export default firebase;