import { doc, setDoc } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import {
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
export const auth = getAuth(app)

export const createUser = async (email: string, pass: string) => {
  try{
  const { user } = await createUserWithEmailAndPassword(auth, email, pass)
  await setDoc(doc(db,'users', user.uid), { admin: false } )

  } catch(e) {
    console.log(e)
  }
}

export const signIn = async (email: string, pass: string) => {
   await signInWithEmailAndPassword(auth, email, pass)
}
