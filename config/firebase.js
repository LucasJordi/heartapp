
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import "firebase/database";





  
const firebaseConfig = {
    apiKey: 'AIzaSyARCXagHG27b2tHQC5fC4AhXzmqiEL_itQ',
    authDomain: 'heart-app-54841.firebaseapp.com',
    databaseURL: 'https://heart-app-54841-default-rtdb.firebaseio.com/',
    projectId: 'heart-app-54841',
    storageBucket: 'heart-app-54841.appspot.com',
    messagingSenderId: '553411042403',
    appId: '1:553411042403:web:76f964f774894ad56fac56',
    measurementId: 'G-B74Q9TZPWN',
};  
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
  
  
