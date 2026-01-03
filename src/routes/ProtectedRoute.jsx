import {Children, userContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../context/AuthContext";
const ProtectedRoute = ({ Children, role }) => {
    const { user } = userContext(Authcontext);
    if(!user) return <Navigate to ="/" />;
    if(role && user.role !== role) return <Navigate to="/" />;
    return children;
};
export default ProtectedRoute;