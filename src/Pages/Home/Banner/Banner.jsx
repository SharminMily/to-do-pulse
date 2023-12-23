/* eslint-disable react/no-unescaped-entities */
import { Button, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Card className="mb-12 overflow-hidden">
        <div className="md:flex flex-row bg-blue-100">
          <div color="blue-gray" className="mb-2 md:w-1/2 text-center">
            <div className="text-center lg:mx-16 lg:my-10 flex justify-center items-center pt-20">
              <h1> <span className="text-3xl text-black font-semibold py-2"> ToDo Pulse </span> <br />intelligently analyzes your task deadlines and provides timely reminders. Receive notifications when a task is approaching its due date or when you've successfully completed a task.</h1>
            </div>
           <Link to="/login"> <Button className="mt-4 py-4 lg:mt-0">explore Now</Button></Link>
          </div>
          <img
            alt="nature"
            className="md:w-1/2 p-10"
            src="https://i.ibb.co/KmzVh3k/todopic1-removebg-preview.png"
          />
        </div>
      </Card>

    </>

  );
};

export default Banner;