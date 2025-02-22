import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditTasks = () => {
    const loader = useLoaderData();
    const handleEdit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;

        const updateInfo = {
            title, description, category
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Your task will be updated",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`https://job-task-server-beige.vercel.app/PUT/tasks/${loader._id}`, updateInfo)
                    .then(() => {
                        Swal.fire({
                            title: "Updated!",
                            text: "Your task has benn updated.",
                            icon: "success"
                        });
                    })
            }
        });
        // https://job-task-server-beige.vercel.app/PUT/tasks/:id

    }
    return (
        <div className="w-11/12 mx-auto text-center my-20">
            <h3 className="text-3xl font-bold">Edit Your Tasks</h3>
            <form onSubmit={handleEdit} className="card-body w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input name="title" type="text" placeholder={loader.title} className="input input-bordered" />
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type='url' placeholder="task image" className="input input-bordered" required />
                </div> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input name="description" type="text" placeholder={loader.description} className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name='category' className="input input-bordered">
                        <option disabled selected>{loader.category}</option>
                        <option value='todo'>To-Do</option>
                        <option value='inProgress'>In Progress</option>
                        <option value='done'>Done</option>
                    </select>

                </div>



                <div className="form-control mt-6">
                    <button className="btn bg-red-500">Edit Task</button>
                </div>
            </form>
        </div>
    );
};

export default EditTasks;