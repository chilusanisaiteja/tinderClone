import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDsPmr10jodUhWHU7IfJDkbVi3HBQnQIGI",
    authDomain: "tinde-clone-5f897.firebaseapp.com",
    projectId: "tinde-clone-5f897",
    storageBucket: "tinde-clone-5f897.appspot.com",
    messagingSenderId: "478950196861",
    appId: "1:478950196861:web:e5b345d721d3cffd039314",
    measurementId: "G-3021MT1ZGV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;