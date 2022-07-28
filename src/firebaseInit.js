import firebaseConfig from '@/firebaseConfig';
import { initializeApp } from 'firebase/app';

import { getAuth  } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const firebaseDb = getFirestore(app);

export {firebaseAuth, firebaseDb};