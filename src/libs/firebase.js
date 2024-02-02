// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXgS5OMIpKYyzAo9ZMtiB6PPbPv6feojg",
  authDomain: "mostaqillaeducom.firebaseapp.com",
  projectId: "mostaqillaeducom",
  storageBucket: "mostaqillaeducom.appspot.com",
  messagingSenderId: "102833256894",
  appId: "1:102833256894:web:3ccd3d9f5c91fa6302a1ef",
  measurementId: "G-WC2933C1L3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export default storage;
