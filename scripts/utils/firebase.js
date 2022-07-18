

  // const firebaseConfig = {
  //   apiKey: "AIzaSyA7kq3YhV3MknAOwSKSVtZY1D5MUv4O4ao",
  //   authDomain: "todoapp-feb.firebaseapp.com",
  //   projectId: "todoapp-feb",
  //   storageBucket: "todoapp-feb.appspot.com",
  //   messagingSenderId: "413964398024",
  //   appId: "1:413964398024:web:56774d6fa65875678d64fd",
  //   measurementId: "G-K028H6DTMH"
  // };
  // firebase.initializeApp(firebaseConfig);

  // export const db = firebase.firestore();
  // console.log(db);

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBm6BA1jYQm8edDy_ZX2eYU1cw69M00ZoI",
    authDomain: "todo-app-3f7b2.firebaseapp.com",
    projectId: "todo-app-3f7b2",
    storageBucket: "todo-app-3f7b2.appspot.com",
    messagingSenderId: "179286403172",
    appId: "1:179286403172:web:f78f4f99a76b6039d69771",
    measurementId: "G-6J5J36PDQE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
