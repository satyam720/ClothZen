import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAlCbogC1pAc3NVABApR2biwo1x3O0L1so",
    authDomain: "clothzen-ce868.firebaseapp.com",
    projectId: "clothzen-ce868",
    storageBucket: "clothzen-ce868.appspot.com",
    messagingSenderId: "693748401875",
    appId: "1:693748401875:web:02f0d5e0fb8d3e15d93626",
    measurementId: "G-L7V4859TWK"
  };

  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;