importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBkyG-rVhe0LZG4i8YyM1xJR229B_Tq6No",
  authDomain: "triksha-51e8f.firebaseapp.com",
  projectId: "triksha-51e8f",
  storageBucket: "triksha-51e8f.firebasestorage.app",
  messagingSenderId: "929767311075",
  appId: "1:929767311075:web:e55ae35c48afc2ce9de7d6"
});

const messaging = firebase.messaging();