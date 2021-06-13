import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; 
import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "cart-2be0c.firebaseapp.com",
	projectId: "cart-2be0c",
	storageBucket: "cart-2be0c.appspot.com",
	messagingSenderId: "18397767885",
	appId: "1:18397767885:web:cfd4f05010de9f58ebe184"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('abcd',process.env)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
