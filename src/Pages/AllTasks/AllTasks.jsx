import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

const AllTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/GET/tasks')
            .then(res => {
                setTasks(res.data);
                console.log(tasks);
            })
    }, [tasks])

    return (
        <div className="w-11/12 mx-auto text-center my-20">
            <h3 className="text-3xl font-bold">Total Tasks = {tasks.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    tasks.map((task, idx) => <div key={idx} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={task.photo}
                                className="rounded-xl h-40 w-full object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{task.title}</h2>
                            <p>{task.description}</p>
                            <p>Category: {task.category}</p>
                            <p>Creation time: {task.createdAt}</p>
                            <div className="card-actions">
                                <button className="btn bg-red-50"> <FaEdit className="text-xl"></FaEdit> Edit</button>
                                <button className="btn bg-red-500">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllTasks;