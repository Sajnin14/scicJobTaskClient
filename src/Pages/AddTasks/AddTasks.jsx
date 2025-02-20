
const AddTasks = () => {
    return (
        <div className="w-11/12 mx-auto">
            <form className="card-body w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Task Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Task Details" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select className="input input-bordered">
                    <option disabled selected>Select Category</option>
                    <option value='todo'>To-Do</option>
                    <option value='inProgress'>In Progress</option>
                    <option value='done'>Done</option>
                </select>
                    
                </div>

                

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTasks;