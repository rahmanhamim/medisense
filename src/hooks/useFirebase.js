import {
 getAuth,
 signInWithPopup,
 signOut,
 GoogleAuthProvider,
 onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitializationAuthentication from "../components/Login/Firebase/firebase.init";

InitializationAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
 const [user, setUser] = useState({});

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
 };
};

export default useFirebase;
