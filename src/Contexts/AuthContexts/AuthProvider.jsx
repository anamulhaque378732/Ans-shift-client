import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContexts";
import { auth } from "../../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // register with email password

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in with email password

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login

  const googleLogin = () => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };

  // log out user

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // update user
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //   observe user state

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    registerUser,
    signinUser,
    googleLogin,
    user,
    loading,
    logOut,
    updateUserProfile,
  };
  return <AuthContext value={authInfo}> {children}</AuthContext>;
};

export default AuthProvider;
