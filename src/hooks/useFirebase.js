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
 const [error, setError] = useState("");
 const [isLoading, setIsLoading] = useState(true);

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
    setError("");
   })
   .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
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
    setError("");
   })
   .catch((err) => {
    setError(err.message);
   });
 };

 // google sign in
 const signInWithGoogle = () => {
  setIsLoading(true);
  signInWithPopup(auth, googleProvider)
   .then((result) => {
    setError("");
    return setUser(result.user);
   })
   .catch((error) => {
    setError(error.message);
   })
   .finally(() => setIsLoading(false));
 };
 // logout
 const logOut = () => {
  setIsLoading(true);
  signOut(auth)
   .then(() => {
    setUser({});
   })
   .finally(() => setIsLoading(false));
 };

 // obeserver
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user);
   }
   setIsLoading(false);
  });
  return unsubscribe;
 }, []);

 console.log(error);

 return {
  user,
  signInWithGoogle,
  logOut,
  handleEmailChange,
  handlePasswordChange,
  handleEmailRegistration,
  signInWithEmail,
  handleNameChange,
  isLoading,
  error,
 };
};

export default useFirebase;
