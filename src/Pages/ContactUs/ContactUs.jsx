import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

const ContactUs = () => {
    return (
        <div>
            <div className="md:flex max-w-xl mx-auto  my-20 flex-row gap-12 justify-center items-center">
                <div className="w-1/2">
                    <img className="w-[100vh]" src="https://i.ibb.co/jLjVyRS/Screenshot-2023-12-22-100002.png" alt="" />
                </div>
                <div className="w-1/2">              

                    <Card color="transparent" shadow={false}>
                        <Typography variant="h4" color="blue-gray">
                           Contact Us
                        </Typography>                        
                        <form className="mt-8 mb-2 w-80 ">
                            <div className="flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-5">
                                    Your Name
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className="  !border-t-blue-gray-200 mt-0 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-5 mt-0">
                                    Your Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className="mb-16 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-5 mt-0">
                                Message
                                </Typography>
                                <textarea className="border border-gray-900 h-32"></textarea>
                              
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
                            <Button className="my-2" fullWidth>
                                Submit
                            </Button>                            
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;