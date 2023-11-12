import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


//Firebase configuration
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
