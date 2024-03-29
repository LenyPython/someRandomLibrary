import { doc, setDoc } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {
  signOut,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
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
  const { user } = await createUserWithEmailAndPassword(auth, email, pass)
  await setDoc(doc(db,'users', user.uid), { 
    admin: false,
    email: user.email
  } )
    await setDoc(doc(db,'borrowed', user.uid), { 
    books: []
  } )
}

export const signIn = async (email: string, pass: string) => {
   await signInWithEmailAndPassword(auth, email, pass)
}
export const logOut = async () => {
  await signOut(auth)
}
