// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMU13lhvv2fdgvVjuO1NSC191ef_W1w4c",
  authDomain: "the-news-dragon-client-fff0e.firebaseapp.com",
  projectId: "the-news-dragon-client-fff0e",
  storageBucket: "the-news-dragon-client-fff0e.appspot.com",
  messagingSenderId: "348618596939",
  appId: "1:348618596939:web:df5c83508f83610b3a63ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;