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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "createTask",
          element: <CreateTask></CreateTask>
        },        
        {
          path: "toDoList",
          element: <ToDoList></ToDoList>
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
  