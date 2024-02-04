import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import Navbar from './components/navbar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ReservationPage from './pages/ReservationPage';
import ProtectedRoute from "./components/protectedroute";
import ReviewPage from "./pages/ReviewPage";
import OurReviewsPage from "./pages/OurReviewsPage";
import PrivateRoute from './components/privateroute';
import PendingRes from './pages/PendingRes';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser, setIsAuthenticated } from "./services/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/config"


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setIsAuthenticated());
      }
      else {
        dispatch(clearUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ourreviews" element={<OurReviewsPage />} />
        <Route element={<ProtectedRoute redirectTo="/login" />}>
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Route>
        <Route element={<PrivateRoute redirectTo="/" />}>
          <Route path="/pendingreservations" element={<PendingRes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
