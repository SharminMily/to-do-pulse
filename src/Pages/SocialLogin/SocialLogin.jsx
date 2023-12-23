import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const  handleGoogleSingIn = ( ) => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
    }

    return (
        <div>
            <Button onClick={handleGoogleSingIn }
                    size="lg"
                    variant="outlined"
                    color=""
                    className="flex w-full font-normal justify-center normal-case bg-black p-2 text-white text-center items-center gap-3"
                >
                    <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
                    Continue with Google
                </Button>
        </div>
    );
};

export default SocialLogin;