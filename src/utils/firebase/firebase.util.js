import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwetg6XbFQRtzCy_EhGVK-CK63EyBd_TU",
  authDomain: "crown-clothing-db-3603d.firebaseapp.com",
  projectId: "crown-clothing-db-3603d",
  storageBucket: "crown-clothing-db-3603d.appspot.com",
  messagingSenderId: "692294531871",
  appId: "1:692294531871:web:4d5cc93f1e25ede206ce2a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
// provide usercredentialImpl, accesstoken
export const signInWitGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  //check whether data exist in database
  const userSnapShot = await getDoc(userDocRef);

  // if user data doesnot exist
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // if user data exit
  return userDocRef;

  //
};