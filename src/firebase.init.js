// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDniSXDgkUobrsH_kXo4esr_SWxaVZY2sw",
  authDomain: "ema-john-simple-2525c.firebaseapp.com",
  projectId: "ema-john-simple-2525c",
  storageBucket: "ema-john-simple-2525c.appspot.com",
  messagingSenderId: "697892552058",
  appId: "1:697892552058:web:ff418f7b15a92be74d6ac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);
export default auth ;