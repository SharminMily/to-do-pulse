/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
    Card,
    Input,
    Checkbox,
    Typography,   
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user)

                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });          
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            });

           
    }

    return (
        <div className=" flex justify-center items-center my-10 mx-20">

            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to Login.
                </Typography>

                <form onSubmit={handleSubmit(handleLogin)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
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
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />

                    <input className='bg-black py-2 rounded-md text-white w-full' value="Login" type="submit" />

                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>

                </form>
                <SocialLogin></SocialLogin>

                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="register" className="text-black font-semibold">
                        Register
                    </a>
                </Typography>
            </Card>

        </div>
    );
};

export default Login;