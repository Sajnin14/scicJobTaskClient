
const Category = () => {
    // const handleCategory = async(cate) => {
    //     // console.log(cate);
    //     // const res = await axios.get(`https://job-task-server-beige.vercel.app/GET/tasks/${cate}`);
    //     // console.log(res.data);
        
    // }
    return (
        <div className="my-20 space-x-4 flex items-center justify-center">
            {/* <button onClick={() => handleCategory('todo')} className="btn">To-Do</button> */}
            <button className="btn">In Progress</button>
            <button className="btn">Done</button>
        </div>
    );
};

export default Category;