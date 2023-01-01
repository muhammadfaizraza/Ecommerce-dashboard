import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBh5ddZV3lOWlFg_eNHCRZk89_eHc9oAA0",
  authDomain: "final-assignment-93617.firebaseapp.com",
  projectId: "final-assignment-93617",
  storageBucket: "gs://final-assignment-93617.appspot.com",
  messagingSenderId: "968032164753",
  appId: "1:968032164753:web:9e4d039cbbef68fafd5830",
  measurementId: "G-DST9T37HTM",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();
export { auth, fs, storage };
