import {
 getAuth,
 signInWithPopup,
 signOut,
 GoogleAuthProvider,
 onAuthStateChanged,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitializationAuthentication from "../components/Login/Firebase/firebase.init";

InitializationAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
 const [user, setUser] = useState({});
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [name, setName] = useState("");

 //  email registration    -------------------------
 const handleEmailChange = (e) => {
  setEmail(e.target.value);
 };

 const handlePasswordChange = (e) => {
  setPassword(e.target.value);
 };

 const handleNameChange = (e) => {
  setName(e.target.value);
 };

 const setUserName = () => {
  updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
 };

 const handleEmailRegistration = (e) => {
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
   .then((result) => {
    const user = result.user;
    console.log(user);
    setUserName();
   })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
   });
  e.preventDefault();
 };

 //  email registration end -----------------------------------------------

 //  email login -----------------------------------

 const signInWithEmail = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
   .then((result) => {
    const user = result.user;
    console.log(user);
   })
   .catch((err) => {
    console.log(err.message);
   });
 };

 // google sign in
 const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
   .then((result) => setUser(result.user))
   .catch((error) => {
    console.log(error.message);
   });
 };
 // logout
 const logOut = () => {
  signOut(auth).then(() => {
   setUser({});
  });
 };

 // obeserver
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user);
   }
  });
  return unsubscribe;
 }, []);

 return {
  user,
  signInWithGoogle,
  logOut,
  handleEmailChange,
  handlePasswordChange,
  handleEmailRegistration,
  signInWithEmail,
  handleNameChange,
 };
};

export default useFirebase;
