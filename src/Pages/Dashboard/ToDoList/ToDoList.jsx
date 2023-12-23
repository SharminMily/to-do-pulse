import { useEffect, useState } from "react";
import ToDoListCard from "./ToDoListCard";

const ToDoList = () => {
    const [allTasks, setAllTasks] = useState([]);

    useEffect( ()=> {
       fetch('http://localhost:5000/tasks')
       .then(res => res.json())
       .then(data => setAllTasks(data))
    }, [])
   
    // console.log(allTasks)
    return (
        <div>
           <h1 className="text-3xl text-center my-8 underline text-pink-800">To Do List</h1>
         <div className="grid md:grid-cols-2 gap-4 mx-8">
        {
            allTasks.map(tasks =>  <ToDoListCard key={tasks._id} tasks={tasks}></ToDoListCard>)
        }
         </div>
        </div>
    );
};

export default ToDoList;