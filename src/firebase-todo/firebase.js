import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAaFspreMWo-dHSahNN4GyX3otfezGxQcs",
    authDomain: "todo-list-app-ali.firebaseapp.com",
    projectId: "todo-list-app-ali",
    storageBucket: "todo-list-app-ali.appspot.com",
    messagingSenderId: "220115512794",
    appId: "1:220115512794:web:6a9aa294b41f5384e164e3",
    measurementId: "G-Q7MYBEGP1N"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;