import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { envs } from "./envs.js";

const firebaseConfig = {
  apiKey: envs.database.apiKey,
  authDomain: envs.database.authDomain,
  projectId: envs.database.projectId,
  storageBucket: envs.database.storageBucket,
  messagingSenderId: envs.database.messagingSenderId,
  appId: envs.database.appId,
  measurementId: envs.database.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

