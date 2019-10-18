import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

// const settings = { timestampsInSnapshots: true };

// const settings = {};

const firebaseConfig = {
    apiKey: "AIzaSyAFGuwyJ0QY7vsHObj4ErwC6p740jfceR0",
    authDomain: "c4prog-2019s2-mad-rfd.firebaseapp.com",
    databaseURL: "https://c4prog-2019s2-mad-rfd.firebaseio.com",
    projectId: "c4prog-2019s2-mad-rfd",
    storageBucket: "c4prog-2019s2-mad-rfd.appspot.com",
    messagingSenderId: "662441940991",
    appId: "1:662441940991:web:2efcb26bc01437385479ca"
};

firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings(settings);

export default firebase;
