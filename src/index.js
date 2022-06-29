import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAADtJ8msr-L8zyyEnQ_Jr_6TCmOfuqLn8",
  authDomain: "first-try-47bd3.firebaseapp.com",
  projectId: "first-try-47bd3",
  storageBucket: "first-try-47bd3.appspot.com",
  messagingSenderId: "974993165571",
  appId: "1:974993165571:web:149eb81d73b6fad67aad36",
  measurementId: "G-95RPT201Z7",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
