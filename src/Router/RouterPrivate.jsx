/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const RouterPrivate = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center m-8">
            <div className="flex justify-center items-center mt-20"> <Spinner className="h-12 w-12 text-pink-600" /></div>
        </div>
    }

    if(user){
        return children;
    } 
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default RouterPrivate;