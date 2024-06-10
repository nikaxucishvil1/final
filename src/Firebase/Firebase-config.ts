import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCc0P05v66wr3gL7aJHTlbCxEYlPXssjsg",
  authDomain: "ecobazar-c9db9.firebaseapp.com",
  projectId: "ecobazar-c9db9",
  storageBucket: "ecobazar-c9db9.appspot.com",
  messagingSenderId: "790030586723",
  appId: "1:790030586723:web:4e12a819076b77b828f956",
  measurementId: "G-DJWGGW51H5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);