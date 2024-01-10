import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    const isAllowed = isAdmin;
    console.log(isAllowed)

    if (!isAllowed) {
        return <Navigate to={props.redirectTo} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;