/* eslint-disable no-unused-vars */
import {
    Button,
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    // const [loginError, setLoginError] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (data) => {
        console.log(data);
        // setLoginError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error));

        // signIn(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         navigate(from, {replace: true});
        //     })
        //     .catch(error => {
        //         console.log(error.message)
        //         setLoginError(error.message);
        //     });
    }

    return (
        <div className=" flex justify-center items-center my-10 mx-20">

            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Register
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>

                <form onSubmit={handleSubmit(handleSignUp)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        {/*  */}
                        <div color="blue-gray" className="-mb-3 font-bold">
                            Your Name
                        </div>
                        <Input
                            type="name"
                            {...register("name", {
                                required: "name"
                            })}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <div color="blue-gray" className="-mb-3 font-bold">
                            Your Email
                        </div>
                        <Input
                            type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <div color="blue-gray" className="-mb-3 font-bold">
                            Password
                        </div>
                        <Input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>

                    <input className='bg-black mt-4 py-2 rounded-md text-white w-full' value="Register" type="submit" />
                </form>
               <SocialLogin></SocialLogin>

                <Typography color="gray" className="mt-4 text-center font-normal">
                    Create an account?{" "}
                    <a href="login" className="text-black font-semibold">
                        Login
                    </a>
                </Typography>

            </Card>

        </div>
    );
};

export default Register;