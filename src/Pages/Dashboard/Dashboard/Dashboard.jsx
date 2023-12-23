/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Dashboard = () => {
    const { user, handleUpdateProfile } = useContext(AuthContext)
    return (
        <div className="flex">
            <div className="w-64 h-screen p-4 text-white bg-pink-900">
                <ul className="gap-2 py-6 px-2 text-lg ">
                    <li className="mb-2">
                        <NavLink to="/dashboard/userProfile">
                            {
                                user ? <div className="flex flex-col"><img className="rounded-full w-20" src={user.photoURL || "https://i.ibb.co/3TdV40T/Screenshot-1356.png"} alt="" /> <h1 className="text-white text-sm">{user.email}</h1></div> : <div><img className="rounded-full w-20" src="https://i.ibb.co/3TdV40T/Screenshot-1356.png" alt="" /></div>
                            }

                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/dashboard/createTask">Create Task</NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/dashboard/toDoList">To Do List</NavLink>
                    </li>
                    {/* <li className="mb-2">
                        <NavLink to="/dashboard/editToDoList">Edit To Do List</NavLink>
                    </li> */}
                    <li className="mb-2">
                        <NavLink to="/dashboard/ongoing">Ongoing</NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink to="/dashboard/completed">Competed</NavLink>
                    </li>

                    <div className="border my-8"></div>

                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;