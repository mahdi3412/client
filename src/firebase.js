import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDM4Ku2qPzH3pSjmMrXw17yknb3nnVpSOs",
    authDomain: "chat-ba376.firebaseapp.com",
    projectId: "chat-ba376",
    storageBucket: "chat-ba376.appspot.com",
    messagingSenderId: "667144384521",
    appId: "1:667144384521:web:4b0746b2fdecd2b9de08d8",
    measurementId: "G-ZYLY4E8FNZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth;