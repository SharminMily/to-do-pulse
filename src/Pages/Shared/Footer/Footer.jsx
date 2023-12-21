
const Footer = () => {
    return (
        <>
            <footer className="w-full bg-black  p-8">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
                    <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10 bg-white" />
                    <ul className="flex text-white flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <div
                              
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                About Us
                            </div>
                        </li>
                        <li>
                            <div
                              
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                License
                            </div>
                        </li>
                        <li>
                            <div
                              
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contribute
                            </div>
                        </li>
                        <li>
                            <div
                              
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contact Us
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <div className="text-center text-gray-400 font-normal">
                    &copy; 2023 ToDo Pulse
                </div>
            </footer>
        </>
    );
};

export default Footer;