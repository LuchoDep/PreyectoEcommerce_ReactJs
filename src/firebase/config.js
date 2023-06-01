// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCewErxOv4k1mHXi9o8Q8FaAiDlAJsV2JA",
  authDomain: "proyecto-rj52190.firebaseapp.com",
  projectId: "proyecto-rj52190",
  storageBucket: "proyecto-rj52190.appspot.com",
  messagingSenderId: "66685893567",
  appId: "1:66685893567:web:99b73e4d345d39954e7f0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
