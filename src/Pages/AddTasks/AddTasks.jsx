import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddTasks = () => {
    const {user} = useContext(AuthContext);
    const navigation = useContext(AuthContext);
    const [errorTitle, setErrorTitle] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const category = form.category.value;
        
        if(title.length > 50){
            setErrorTitle('title is more then 50 characters');
            return;
        }

        const taskInfo = {
            title,
            photo,
            description,
            category,
            userEmail : user.email,
            createdAt: new Date().toISOString(),
        }

        axios.post('http://localhost:5000/POST/tasks', taskInfo)
        .then(res => {
            console.log(res.data);
            Swal.fire({
                title: "Task Adding done!",
                icon: "success",
                draggable: true
              });
             navigation('/'); 
        })
        

        // console.log(taskInfo);
    }

    return (
        <div className="w-11/12 mx-auto">
            <form onSubmit={handleSubmit} className="card-body w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input name="title" type="text" placeholder="Task Title" className="input input-bordered" required />
                    {
                        errorTitle && <p className="text-red-600 text-sm">{errorTitle}</p>
                    }
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type='url' placeholder="task image" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input name="description" type="text" placeholder="Task Details" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name='category' className="input input-bordered">
                    <option disabled selected>Select Category</option>
                    <option value='todo'>To-Do</option>
                    <option value='inProgress'>In Progress</option>
                    <option value='done'>Done</option>
                </select>
                    
                </div>

                

                <div className="form-control mt-6">
                    <button className="btn bg-red-500">Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTasks;