import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSaDNAiEjZVYyhiWty78Gr9BaYCksrqSo",
  authDomain: "block-chain-bd159.firebaseapp.com",
  databaseURL: "https://block-chain-bd159-default-rtdb.firebaseio.com",
  projectId: "block-chain-bd159",
  storageBucket: "block-chain-bd159.appspot.com",
  messagingSenderId: "350020938350",
  appId: "1:350020938350:web:082620693c6b9d2470147f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const storage = firebase.storage();

export {
  firebase as default,
  storage,
  projectFirestore,
  projectStorage,
  timestamp,
};
