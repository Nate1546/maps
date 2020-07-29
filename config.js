import firebase from 'firebase';
require('@firebase/firestore')

const config = {
  apiKey: "AIzaSyCgo-HUY080nY5ZkjoPZJsB_heY-oN-MYM",
  authDomain: "cloud-santa-app.firebaseapp.com",
  databaseURL: "https://cloud-santa-app.firebaseio.com",
  projectId: "cloud-santa-app",
  storageBucket: "cloud-santa-app.appspot.com",
  messagingSenderId: "988351083391",
  appId: "1:988351083391:web:da09a7c7868c038ae2204a"
};


// Initialize Firebase
firebase.initializeApp(config);

export default firebase.firestore();
