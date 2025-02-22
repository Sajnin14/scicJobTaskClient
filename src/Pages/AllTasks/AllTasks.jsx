import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllTasks = () => {
    const { data: tasksData = [], refetch } = useQuery({
        queryKey: ['tasksData'],
        queryFn: async () => {
            const res = await axios.get('https://job-task-server-beige.vercel.app/GET/tasks')
            return (res.data);
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://job-task-server-beige.vercel.app/DELETE/tasks/${id}`)
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    })

            }
        });
    }

    // useEffect(() => {
    //     axios.get('https://job-task-server-beige.vercel.app/GET/tasks')
    //         .then(res => {
    //             setTasks(res.data);
    //             // console.log(tasks);
    //         })
    // }, [tasks])

    return (
        <div className="w-11/12 mx-auto text-center my-20">
            <h3 className="text-3xl font-bold">Total Tasks = {tasksData.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    tasksData.map((task, idx) => <div key={idx} className="card bg-base-100 shadow-xl">
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
                                <Link to={`/editTasks/${task._id}`}><button className="btn bg-red-50"> <FaEdit className="text-xl"></FaEdit> Edit</button></Link>
                                <button onClick={() => handleDelete(`${task._id}`)} className="btn bg-red-500">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllTasks;