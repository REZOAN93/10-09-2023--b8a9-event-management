// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVnrl5J1gaYVHV9qu2ZseZsr34_YfKlBA",
  authDomain: "b8a9-assingment-rezoan.firebaseapp.com",
  projectId: "b8a9-assingment-rezoan",
  storageBucket: "b8a9-assingment-rezoan.appspot.com",
  messagingSenderId: "780898514400",
  appId: "1:780898514400:web:34c263ba5968fd949aa785",
  measurementId: "G-8415GFXQNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app