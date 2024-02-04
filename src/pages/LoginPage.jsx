import React from 'react';
import AuthForm from '../components/authform.jsx';
import { handleLogin } from '../services/auth.js';
import { setIsAuthenticated, setIsAdmin } from '../services/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    const handleLoginSubmit = async (email, password) => {

        try {
            await handleLogin(email, password, handleLoginSuccess);
            navigate("/");

        } catch (error) {
            console.error('Error during login:', error);
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
                alert("Invalid username or password")
            }
            else if (error.code === "auth/too-many-requests") {
                alert("Too many logging attempts! Try again later");
            }
            else {
                alert("Login error: " + error.message)
            }
        }
    };

    const handleLoginSuccess = (user) => {
        //pt a afla daca se logheaza adminul, il detectez dupa uid-ul stocat in firestore
        if (user.uid === "y3XzAVEY0PO0gUhDkTLL4eNQ1k62")
            dispatch(setIsAdmin());
        else
            dispatch(setIsAuthenticated());
    };

    return (
        <div className="login-page-container">
            <AuthForm
                title="Log in"
                buttonText="Log in"
                login="true"
                onSubmit={handleLoginSubmit}
            />

        </div>
    );
}

export default LoginPage;
