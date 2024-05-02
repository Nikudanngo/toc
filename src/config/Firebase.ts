import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAH1b-GDYA9HxXJla5Ln26YDKWE8k-Fcwg",
  authDomain: "toc-web-11273.firebaseapp.com",
  projectId: "toc-web-11273",
  storageBucket: "toc-web-11273.appspot.com",
  messagingSenderId: "659773912636",
  appId: "1:659773912636:web:d5e22fea97cf6212407539",
  measurementId: "G-8CPFT9R8M3",
};

const admin = initializeApp(config);
export const auth = getAuth(admin);