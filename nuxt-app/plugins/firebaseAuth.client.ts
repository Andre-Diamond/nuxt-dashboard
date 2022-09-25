import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {

  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: "nuxt3-firebase-bf934.firebaseapp.com",
    projectId: "nuxt3-firebase-bf934",
    storageBucket: "nuxt3-firebase-bf934.appspot.com",
    messagingSenderId: "892581465806",
    appId: "1:892581465806:web:a864f7b97da0d6861c0a9f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  initUser();

  const auth = getAuth();

  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);

});