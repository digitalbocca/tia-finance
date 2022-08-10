import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBP_jZfVD7bWgou6hjRFDGXZfijQloimXQ",
  authDomain: "tia-finance.firebaseapp.com",
  projectId: "tia-finance",
  storageBucket: "tia-finance.appspot.com",
  messagingSenderId: "187773716490",
  appId: "1:187773716490:web:8a6e8c7502a881dbfd37f3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {
  app,
  auth
}
