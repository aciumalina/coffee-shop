// AuthComponent.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../services/authSlice';
import { handleSignup, handleLogin } from '../services/auth';

const AuthComponent = () => {
    const dispatch = useDispatch();

    const handleSignupSuccess = (user) => {
        dispatch(setIsAuthenticated());
        console.log('Signup success:', user);
    };

    const handleSignupError = (error) => {
        console.error('Signup error:', error);

    };

    const handleLoginSuccess = (user) => {

        dispatch(setIsAuthenticated());
        console.log('Login success:', user);
    };

    const handleLoginError = (error) => {
        console.error('Login error:', error);

    };

    const handleSignupClick = () => {
        handleSignup('email@example.com', 'password123', handleSignupSuccess, handleSignupError);
    };

    const handleLoginClick = () => {
        handleLogin('email@example.com', 'password123', handleLoginSuccess, handleLoginError);
    };

    return (
        <div>
            <button onClick={handleSignupClick}>Signup</button>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
};

export default AuthComponent;
