/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebaseConfig";
// import { app } from "../firebase/firebaseConfig";

export const AuthContext = createContext()
const auth =  getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
         return signOut(auth);
    }


      //    UpdateProfile
      const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('user observing', currentUser)
            setLoading(false)
        })
        return () =>{
            return unSubscribe()
        }
    },[])

    const authInfo = {
        createUser,
        logIn ,
        logOut,
        googleSignIn,
        loading,
        user,
        handleUpdateProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}  
       </AuthContext.Provider>
    );
};

export default AuthProvider;