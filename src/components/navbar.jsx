import { Link } from 'react-router-dom';
import "../cssStyles/Navbar.css";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../services/authSlice';
import { logout } from '../services/auth';

const Navbar = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const isAdmin = useSelector((state) => state.auth.isAdmin);
    const dispatch = useDispatch();

    const handleLogout = () => {
        try {
            logout();
            dispatch(clearUser());
            alert("Logout successful");
        }
        catch (error) {
            alert("Error logging out!");
        }

    };

    return (
        <nav className="navbar">
            <Link to="/">
                <div className="logo-container">
                    <img src={require('../images/logo-modified.png')} alt="Logo" className="logo" />
                </div>
            </Link>
            <div className="title-container">
                <h1 className="navbar-title">Caffeine Corner</h1>
            </div>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ourreviews">Our reviews</Link></li>
                {isAuthenticated && !isAdmin ? (
                    <>
                        <li><Link to="/reservation">Make a reservation</Link></li>
                        <li><Link to="/review">Leave us a review</Link></li>
                        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                    </>
                ) : null}
                {isAdmin ? (
                    <>
                        <li><Link to="/pendingreservations">Pending reservations</Link></li>
                        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                    </>
                ) : null}
                {!isAuthenticated ? (
                    <>
                        <li><Link to="/signup">Sign up</Link></li>
                        <li><Link to="/login">Log in</Link></li>
                    </>
                ) : null}
            </ul>
        </nav>
    );

};

export default Navbar;