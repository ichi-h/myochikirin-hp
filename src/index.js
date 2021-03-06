import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firebase-storage';
import 'firebase/analytics';
import './index.css';
import './fontello.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

var firebaseConfig = {
  apiKey: "AIzaSyB3IwhvS4uNH4-40EAIIOFs40EueT2MwPM",
  authDomain: "myochikirin-hp.firebaseapp.com",
  projectId: "myochikirin-hp",
  storageBucket: "myochikirin-hp.appspot.com",
  messagingSenderId: "695630528849",
  appId: "1:695630528849:web:d68af7bcbba86edb7dd370",
  measurementId: "G-CN6SZ8Y5PJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
