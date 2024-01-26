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
  apiKey: "AIzaSyCvSJLtPvqxW5SPAwt2fMwJnXBc6lApQ2Y",
  authDomain: "mostaqillaedu-fbc57.firebaseapp.com",
  projectId: "mostaqillaedu-fbc57",
  storageBucket: "mostaqillaedu-fbc57.appspot.com",
  messagingSenderId: "105159568082",
  appId: "1:105159568082:web:ed3d4aa9708996f0015b0b",
  measurementId: "G-SPT50MWFYP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export default storage;
