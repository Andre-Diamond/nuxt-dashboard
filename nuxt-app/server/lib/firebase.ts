// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const config = useRuntimeConfig();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: "nuxt3-firebase-bf934.firebaseapp.com",
  projectId: "nuxt3-firebase-bf934",
  storageBucket: "nuxt3-firebase-bf934.appspot.com",
  messagingSenderId: "892581465806",
  appId: "1:892581465806:web:a864f7b97da0d6861c0a9f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const firestoreDb = getFirestore(firebaseApp);
