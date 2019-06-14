import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAc7uNDEHsEQlAM8D1-ybuhiVRsR69DTRM",
    authDomain: "amready-171619.firebaseapp.com",
    databaseURL: "https://amready-171619.firebaseio.com",
    projectId: "amready-171619",
    storageBucket: "amready-171619.appspot.com",
    messagingSenderId: "276606987301",
    appId: "1:276606987301:web:518f01630ac1d9a1"
  };
firebase.initializeApp(config);

export const databaseRef = firebase.database().ref();