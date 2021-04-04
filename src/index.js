import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
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

const firebaseConfig = {
  apiKey: "AIzaSyCScbzQJOJwndGPyU3Db_wAsWtmV9i6cLM",
  authDomain: "myochikirin-hp-14b0d.firebaseapp.com",
  projectId: "myochikirin-hp-14b0d",
  storageBucket: "myochikirin-hp-14b0d.appspot.com",
  messagingSenderId: "1078840520799",
  appId: "1:1078840520799:web:9b14c7a2efd355938babea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
