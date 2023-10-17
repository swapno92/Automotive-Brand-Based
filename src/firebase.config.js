// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBHhMW1AdjLs-J567Ckynf3klTNguuFFE",
  authDomain: "assignment-ten-f5536.firebaseapp.com",
  projectId: "assignment-ten-f5536",
  storageBucket: "assignment-ten-f5536.appspot.com",
  messagingSenderId: "791060804833",
  appId: "1:791060804833:web:b7915cd52d3ddb46fef3a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth