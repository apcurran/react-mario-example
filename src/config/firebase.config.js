import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyD_q7zJS2TeU4p3TVEdxzYEhjkXjLz7-9M",
    authDomain: "mario-plan-eb3fe.firebaseapp.com",
    databaseURL: "https://mario-plan-eb3fe.firebaseio.com",
    projectId: "mario-plan-eb3fe",
    storageBucket: "mario-plan-eb3fe.appspot.com",
    messagingSenderId: "480884923808",
    appId: "1:480884923808:web:67a2cdf40ce4da9dca58c5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;