import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB6OPgGcWi16NLBeSzjOsEPWwPzdwRp7bc",
    authDomain: "moneymatter-efd96.firebaseapp.com",
    databaseURL: "https://moneymatter-efd96-default-rtdb.firebaseio.com",
    projectId: "moneymatter-efd96",
    storageBucket: "moneymatter-efd96.appspot.com",
    messagingSenderId: "419548916222",
    appId: "1:419548916222:web:104c5f835b1ae770cb38af"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };