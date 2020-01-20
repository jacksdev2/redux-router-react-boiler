import * as firebase from 'firebase';



const config = {
    apiKey: "AIzaSyCECbr3Rlv04o01lK0hZSNLOIT7is0QpwY",
    authDomain: "expensify-188bd.firebaseapp.com",
    databaseURL: "https://expensify-188bd.firebaseio.com",
    projectId: "expensify-188bd",
    storageBucket: "expensify-188bd.appspot.com",
    messagingSenderId: "510841147666"
};



firebase.initializeApp(config);


const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider;

export { firebase, googleAuthProvider, database as default}
// database.ref().set({
//   work: 'billy',
//   age: 13,
//   location:{
//     lit:34,
//     bit:4555
//   }
// })
