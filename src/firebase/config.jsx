import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB4GDBswE-gC0ezpu6Km9MhWhIJz5vTKFg",
    authDomain: "lifedev-luiz.firebaseapp.com",
    projectId: "lifedev-luiz",
    storageBucket: "lifedev-luiz.firebasestorage.app",
    messagingSenderId: "1053855414551",
    appId: "1:1053855414551:web:161ed2fbe1bc9f44b11f52",
    measurementId: "G-CL6KCL27G7"
  };

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }





