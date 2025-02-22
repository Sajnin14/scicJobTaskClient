
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogle = async() => {
        const res = await googleLogin()
        const user = res.user;
        const userInfo = {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
        }
          console.log(userInfo);
        const res2 = await axios.post('https://job-task-server-beige.vercel.app/users', userInfo)
         console.log(res2.data);
            navigate('/addTasks');

        // .then(() => {

        //     const userInfo = {
        //         email: user.email,
        //         name: user.displayName,
        //         photo: user.photoURL,
        //     }

        //     axios.post('https://job-task-server-beige.vercel.app/users', userInfo)
        //         .then(res => {
        //             console.log(res.data);
        //         })
        //     //  console.log(res.user);
        //     navigate('/addTasks');
        // })

    }

    return (
        <div className="w-11/12 mx-auto flex justify-center items-center min-h-screen">
            <div>
                <button onClick={handleGoogle} className="btn bg-base-300 text-2xl"><FcGoogle className="text-3xl"></FcGoogle> Sign-in With Google</button>
            </div>
        </div>
    );
};

export default Login;