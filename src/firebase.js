import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_DNb9Q3yRKH6xI3fDrtyPJEGdqjoXThU",
    authDomain: "todo-react-e5991.firebaseapp.com",
    projectId: "todo-react-e5991",
    storageBucket: "todo-react-e5991.appspot.com",
    messagingSenderId: "532716675135",
    appId: "1:532716675135:web:7dedeee87fae30758b988a",
    measurementId: "G-QHSN69T43V"
});

export const db = firebaseApp.firestore()
export const auth = firebase.auth()
