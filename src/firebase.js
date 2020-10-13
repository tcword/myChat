import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCL_oMZidSrov_Ya5C_T0QiwA7lnp7oYOk",
  authDomain: "whatsapp-47a9b.firebaseapp.com",
  databaseURL: "https://whatsapp-47a9b.firebaseio.com",
  projectId: "whatsapp-47a9b",
  storageBucket: "whatsapp-47a9b.appspot.com",
  messagingSenderId: "943756285775",
  appId: "1:943756285775:web:2a11d1a6a50398dc34573a",
  measurementId: "G-Y2L319Y84S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
