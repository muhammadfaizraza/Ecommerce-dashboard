import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCTyjBiAai1AIJPu3oCvwC0XDLLfmCFfDg",
  authDomain: "e-commerce-4c93e.firebaseapp.com",
  projectId: "e-commerce-4c93e",
  storageBucket: "e-commerce-4c93e.appspot.com",
  messagingSenderId: "54527124411",
  appId: "1:54527124411:web:64638d8d2cb4ceec495a9e",
  measurementId: "G-64LTZHSDTY"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();
export { auth, fs, storage };
