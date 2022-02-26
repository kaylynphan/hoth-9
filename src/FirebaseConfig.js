// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL9CiR77NOpqlqBTFGiyOJ7iA-KNvTslE",
  authDomain: "hoth-2022.firebaseapp.com",
  projectId: "hoth-2022",
  storageBucket: "hoth-2022.appspot.com",
  messagingSenderId: "547809441238",
  appId: "1:547809441238:web:736b00a29e56870a512077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;