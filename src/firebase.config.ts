import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD6ZVxwv54vQMmIrBMkFqT0gHZMcnbtaQ0",
  authDomain: "somelib-aaec9.firebaseapp.com",
  projectId: "somelib-aaec9",
  storageBucket: "somelib-aaec9.appspot.com",
  messagingSenderId: "872735298226",
  appId: "1:872735298226:web:9162fab1f930977a24afab"
}


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
