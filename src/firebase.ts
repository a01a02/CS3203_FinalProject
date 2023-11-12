import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyANd4yZT54bSK0AcbItj1bqB7q5x78fOT0",
//   authDomain: "nwitter-reloaded.firebaseapp.com",
//   projectId: "nwitter-reloaded",
//   storageBucket: "nwitter-reloaded.appspot.com",
//   messagingSenderId: "597055701730",
//   appId: "1:597055701730:web:ad1f4784fbb491e2a614bb",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAx9wSfYPpSENNp3AyeUZ-NeW3BaJIlv-w",
  authDomain: "cs3203final.firebaseapp.com",
  projectId: "cs3203final",
  storageBucket: "cs3203final.appspot.com",
  messagingSenderId: "47200009677",
  appId: "1:47200009677:web:685ae8eb367766f60cd884"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);