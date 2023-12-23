import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
             <h1 className="text-4xl text-center  font-semibold text-pink-800 my-20">
                <span className="text-black font-normal text-center">Hey Welcome </span>
                {
                   user.displayName ? user.displayName : 'Back'
                }
            </h1>
        </div>
    );
};

export default UserProfile;