/* eslint-disable react/prop-types */
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ToDoListCard = ({ tasks }) => {

    const { _id, name, selected, date, text } = tasks;

    const handleDelete = _id => {
        console.log(_id, 'hello');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/tasks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                        }
                    })

                // console.log('deleted')

            }
        })
    }



        return (
            <div className="">
                <Card className="mt-6 border-t-4 border-pink-700">
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {name}
                        </Typography>
                        <Typography>
                            {text}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <div className="flex justify-between mb-4">
                            <div className="border border-black rounded-lg p-2 font-bold">{date}</div>
                            <div className="flex gap-2">
                                {/*  <Link to={`/updateProduct/${_id}`}> */}
                               <div className="border-2 rounded-full border-black p-1">
                                <Link to={`/dashboard/editToDoList/${_id}`}>
                                     <FaEdit className=" text-3xl" /> 
                                     </Link>
                                     </div>

                                <div onClick={() => handleDelete(_id)} className="border-2 rounded-full border-red-900 p-1"><MdDeleteForever className="text-red-700 text-3xl" /> </div>
                            </div>

                        </div>
                        <Button className="w-full text-base bg-pink-900 normal-case">{selected}</Button>
                    </CardFooter>
                </Card>

            </div>
        );
    };
    

    export default ToDoListCard;