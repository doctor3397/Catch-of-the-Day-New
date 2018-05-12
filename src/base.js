import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWEWrWABOujaHeDOQm5b9K_Tg6CHhjzrI",
  authDomain: "catch-of-the-da-4312a.firebaseapp.com",
  databaseURL: "https://catch-of-the-da-4312a.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
