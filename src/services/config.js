// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq8tKpCDUzrgqCyINna0hZ8I-f8cdbKIw",
    authDomain: "coffeeshop-8e073.firebaseapp.com",
    projectId: "coffeeshop-8e073",
    storageBucket: "coffeeshop-8e073.appspot.com",
    messagingSenderId: "323680788484",
    appId: "1:323680788484:web:3442dbdb354593776d9551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//intialize firestore
const db = getFirestore(app);

const auth = getAuth(app); //initialize the authentication module
// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
// });

export { db, app, auth };