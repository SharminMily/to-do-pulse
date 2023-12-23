import { Input, Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditToDoList = () => {

    const tasks = useLoaderData();
    const { _id, name, selected, date, text } = tasks;

    const { register, handleSubmit } = useForm();

    const handleTaskSubmit = (data) => {
        // console.log(data);

         // send data to the server
         fetch(`http://localhost:5000/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tasks Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Added'

                    })
            })

    }


    return (
        <div>
        <h1 className="text-3xl font-semibold text-pink-700  text-center mt-4 mb-0">Edit Task</h1>
        <div className="flex justify-center items-center mx-20">
            <form onSubmit={handleSubmit(handleTaskSubmit)} className="mt-8 mb-2 w-full mx-auto ">
                <div className="flex flex-col gap-6">
                    {/*  */}
                    <div color="blue-gray" className="-mb-6 font-bold">
                        Title
                    </div>
                    <Input
                        type="name"
                        {...register("name", {
                            required: "name"
                        })}
                        defaultValue={name}
                        size="lg"
                        placeholder="title"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />   
                  
                    <div className="-mt-4">
                        <h1 className="text-base font-semibold">Priority</h1>
                        <div className="border -mb- p-2 rounded-md !border-t-blue-gray-200 focus:!border-t-gray-900">
                            <select {...register("selected")} 
                             defaultValue={selected}
                            className="w-full">
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>


                    {/* photoURL */}
                    <div color="blue-gray " className="-mt-3 -mb-4 font-bold">
                        Date
                    </div>
                    <Input
                        type="date"
                        {...register("date", {
                            required: "photoURL Address is required"
                        })}
                        defaultValue={date}
                        size="lg"
                        placeholder="Your Photo url"
                        className="-mt-8   !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />


                    <div color="blue-gray" className="-mt-5 -mb-5 font-bold">
                    Description
                    </div>                      
                    <div className="w-full"  type="text">
                        <Textarea type="text"
                        {...register("text", {
                            required: "description Address is required"
                        })}  defaultValue={text} label="Description" />
                    </div>
                </div>

                <input className='bg-pink-900 mt-4 py-2 rounded-md text-white w-full' value="Register" type="submit" />
            </form>
        </div>
    </div>
    );
};

export default EditToDoList;