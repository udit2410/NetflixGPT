// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcbtkXbcOtkbUMXzVk0nHjTO8yOwyIv2c",
  authDomain: "netflixgpt-da9bd.firebaseapp.com",
  projectId: "netflixgpt-da9bd",
  storageBucket: "netflixgpt-da9bd.appspot.com",
  messagingSenderId: "1053171380739",
  appId: "1:1053171380739:web:00423c2007a41ebd8dd436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth=getAuth();