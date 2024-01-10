import React, { useState } from 'react';
import AuthForm from '../components/authform.jsx';
import { handleSignup } from '../services/auth.js';
import { setIsAuthenticated } from '../services/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleSignupSubmit = async (email, password) => {
    try {

      await handleSignup(email, password, handleSignupSuccess);
      navigate("/");
    } catch (error) {
      console.error('Error during signup:', error);
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      else if (error.code === "auth/weak-password") {
        alert("weak password");
      }
      else {
        alert("signup error: " + error.message);
      }
    }
  };

  const handleSignupSuccess = (user) => {
    dispatch(setIsAuthenticated());
  };

  return (
    <AuthForm
      title="Register"
      buttonText="Register"
      login="false"
      onSubmit={handleSignupSubmit}
    />
  );
}

export default SignupPage;
