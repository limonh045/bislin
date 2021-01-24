import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth'

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyAjrLqBknVL0mJVehAfZ1-jzZ6WpUmbfaI",
    authDomain: "bislin-68a9c.firebaseapp.com",
    databaseURL: "https://bislin-68a9c-default-rtdb.firebaseio.com",
    projectId: "bislin-68a9c",
    storageBucket: "bislin-68a9c.appspot.com",
    messagingSenderId: "141719014084",
    appId: "1:141719014084:web:e7913eef03df8b9f9bd791",
    measurementId: "G-VEGG8Z2SG3",
  })
export var provider = new firebase.auth.GoogleAuthProvider();

