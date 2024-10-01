import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW1OpRIQH790-BeyCAjfLhnecblXzph4E",
  authDomain: "aq54-3e93a.firebaseapp.com",
  projectId: "aq54-3e93a",
  storageBucket: "aq54-3e93a.appspot.com",
  messagingSenderId: "352577216237",
  appId: "1:352577216237:web:2c128ea72b6c7d0234f6e4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
