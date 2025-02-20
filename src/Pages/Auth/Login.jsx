
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogle = () =>{
       googleLogin()
       .then(() => {
            //  console.log(res.user);
            navigate('/addTasks');
       })
      
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