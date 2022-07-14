import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSvHPtO0bheE83MrZbxYW3sRjeijWpEfs",
    authDomain: "kiki-code.firebaseapp.com",
    projectId: "kiki-code",
    storageBucket: "kiki-code.appspot.com",
    messagingSenderId: "277109193399",
    appId: "1:277109193399:web:c61fecf9e2b10337926b32"
  };

 // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }