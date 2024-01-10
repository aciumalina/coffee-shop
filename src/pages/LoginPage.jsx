import React, { useState } from 'react';
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
                alert("too many requests");
            }
            else {
                alert("Login error: " + error.message)
            }
        }
    };

    const handleLoginSuccess = (user) => {
        if (user.email === "admin@yahoo.com")
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
