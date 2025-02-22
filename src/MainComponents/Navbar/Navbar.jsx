import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const links = <div className="space-x-2">
       <NavLink to='/'>Home</NavLink>
       {
        user && user.email && <> 
            <NavLink to='/addtasks'>Add Task</NavLink>
            <NavLink to='/alltasks'>All Task</NavLink>
            <NavLink to='/category'>Category</NavLink>
        </>
       }
       {/* <NavLink>Edit Task</NavLink>
       <NavLink>Delete Task</NavLink>
       <NavLink>Remove Task</NavLink> */}
    </div>

    return (
        <div className="bg-red-50 sticky z-40 top-0">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">TaskHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user.email ? <button onClick={() => logOut()}>log out</button>  : <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;