import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAEeI1gfmtVUNE7BX3nmBTTLrNtNFzCQlg",
  authDomain: "facebook-clone-next.firebaseapp.com",
  projectId: "facebook-clone-next",
  storageBucket: "facebook-clone-next.appspot.com",
  messagingSenderId: "604517304882",
  appId: "1:604517304882:web:921dcb7c1e22f934510a2b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
