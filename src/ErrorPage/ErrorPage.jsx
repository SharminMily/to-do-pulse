import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
           <h1 className="text-pink-800 text-5xl text-center font-semibold mt-20">Error!</h1>
           <p className="text-center text-2xl mt-6"> -- Not Found --</p>
           <Link to="/"> <p  className="text-center text-blue-600">Go To Home...</p></Link>
        </div>
    );
};

export default ErrorPage;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           