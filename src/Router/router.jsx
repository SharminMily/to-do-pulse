import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/Register/Register";
import Main from "../Layout/Main/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import TaskManagement from "../Pages/Dashboard/TaskManagement/TaskManagement";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ToDoList from "../Pages/Dashboard/ToDoList/ToDoList";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import Ongoing from "../Pages/Dashboard/Ongoing/Ongoing";
import Completed from "../Pages/Dashboard/Completed/Completed";
import EditToDoList from "../Pages/Dashboard/ToDoList/EditToDoList";
import UserProfile from "../Pages/Dashboard/Dashboard/UserProfile/UserProfile";
import RouterPrivate from "./RouterPrivate";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/taskManagement',
            element: <TaskManagement></TaskManagement>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/contactUs',
            element: <ContactUs></ContactUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
       
      ]
    },
    {
      path: "dashboard",
      element: <RouterPrivate><Dashboard></Dashboard></RouterPrivate>,
      children: [
        {
          path: "userProfile",
          element: <UserProfile></UserProfile>
        },        
        {
          path: "createTask",
          element: <CreateTask></CreateTask>
        },        
        {
          path: "toDoList",
          element: <ToDoList></ToDoList>
        },
        {
          path: "editToDoList/:id",
          element: <EditToDoList></EditToDoList>,
          loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`)
        },

        {
          path: "ongoing",
          element: <Ongoing></Ongoing>
        },
        {
          path: "completed",
          element: <Completed></Completed>
        },
      ]
    }
  ]);
  