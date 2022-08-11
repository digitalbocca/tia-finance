import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBP_jZfVD7bWgou6hjRFDGXZfijQloimXQ",
  authDomain: "tia-finance.firebaseapp.com",
  projectId: "tia-finance",
  storageBucket: "tia-finance.appspot.com",
  messagingSenderId: "187773716490",
  appId: "1:187773716490:web:8a6e8c7502a881dbfd37f3"
};

const initApp = () => {
  initializeApp(firebaseConfig);
} 

export {
  initApp
}
