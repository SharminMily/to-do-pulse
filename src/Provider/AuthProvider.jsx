/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebaseConfig";
// import { app } from "../firebase/firebaseConfig";

export const AuthContext = createContext()
const auth =  getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
         return signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing')
            setUser(currentUser)
        })
        return () => unSubscribe()
    },[])

    const authInfo = {
        createUser,
        logIn ,
        logOut,
        user
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}  
       </AuthContext.Provider>
    );
};

export default AuthProvider;