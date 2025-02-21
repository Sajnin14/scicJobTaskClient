import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate} from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        <div className="w-2/4 min-h-screen mx-auto flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user && user.email){
       return children;
    }
    return <Navigate to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children : PropTypes.object,
}

export default PrivateRoute;