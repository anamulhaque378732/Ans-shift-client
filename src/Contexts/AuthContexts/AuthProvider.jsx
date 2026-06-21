import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
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

  //   observe user state
  useEffect(() => {}, []);

  const authInfo = { registerUser, signinUser, googleLogin, user, loading };
  return <AuthContext value={authInfo}> {children}</AuthContext>;
};

export default AuthProvider;
