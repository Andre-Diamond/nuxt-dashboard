import { initializeApp } from "firebase/app";
import { initUser } from "~~/composables/useFirebase";

export default defineNuxtPlugin(nuxtApp => {

    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
      };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    initUser();
    //console.log(app);
})

