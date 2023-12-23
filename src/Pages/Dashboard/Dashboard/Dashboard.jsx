import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 h-screen p-4 bg-blue-200">
                <ul className="gap-2 py-6 px-2 text-lg "> 
                    <li>
                        <NavLink to="/dashboard/user">User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/createTask">Create Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/toDoList">To Do List</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/dashboard/ongoing">Ongoing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/completed">Competed</NavLink>
                    </li>
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