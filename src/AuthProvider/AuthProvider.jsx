import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const googleLogin = () =>{
        const googleSignIn = signInWithPopup(auth, provider)
        .then((res) => {
            setLoading(true);
            setUser(res.user);
            console.log(user);
            const userInfo = {
                id: user.uid,
                email : user.email,
                name : user.displayName,
                photo: user.photoURL,
            }
            toast.success('login successful!', { position: 'top-center' });
        })

        .catch(err => {
            toast.error(<p>{err.code}</p>, { position: 'top-center' })
        })

        return googleSignIn;

        // return signInWithPopup(auth, provider);
    }

    const updateUser = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData)
    }

    

    useEffect(() => {
        const userObserver = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return (() => userObserver());
    }, [])

    const contextInfo = {
        user,
        loading,
        googleLogin,
        updateUser,
    }

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;