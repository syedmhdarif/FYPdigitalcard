import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSRpmM9CEATWEvEu8GwELcQ19nPhpRYF8",
  authDomain: "chatapp-6da75.firebaseapp.com",
  databaseURL: "https://chatapp-6da75-default-rtdb.firebaseio.com",
  projectId: "chatapp-6da75",
  storageBucket: "chatapp-6da75.appspot.com",
  messagingSenderId: "849040435198",
  appId: "1:849040435198:web:4cf16c10bdd03dc01a82af",
  measurementId: "G-EQ0J5WPV6R"
};

export default Firebase.initializeApp(firebaseConfig);
