import { createContext, useEffect, useState } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../firebaseSDK/firebaseSDK';
import axios from 'axios';
import useUserPost from '../hooks/useUserPost';

export const MyContext = createContext(null);

const ContextPassData = ({ children }) => {
  const [user, setUser] = useState(null);
  const [customError, setCustomError] = useState(null);
  const [postUserDB] = useUserPost();
  const [courseData, setCourseData] = useState();

  //firebase providers:
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //sign up with email and password:
  const signUpEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with email password:
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign in with google:
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //sign in with github:
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //sign out user:
  const logOutUser = () => {
    return signOut(auth);
  };

  //profile update when sign up:
  const profileUpdate = (profile) => {
    return updateProfile(auth?.currentUser, profile);
  };

  //user  auth state change:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        postUserDB({
          name: currentUser?.displayName,
          email: currentUser?.email,
          img: currentUser?.photoURL,
          user_role: 'basic',
        });
        axios
          .post('http://localhost:3000/jwt', {
            email: user?.email,
          })
          .then((resData) => {
            const token = resData?.data?.token;

            if (!token) {
              console.log('token gayeb');
            }
            // console.log(token);
            localStorage.setItem('accessToken', token);
          });
      } else {
        setUser(null);
      }
    });

    return unsubscribe();
  }, [postUserDB]);

  const contextData = {
    user,
    setUser,
    customError,
    setCustomError,
    signUpEmailPassword,
    profileUpdate,
    loginUser,
    googleLogin,
    githubLogin,
    logOutUser,
    courseData,
    setCourseData,
  };

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};

export default ContextPassData;
