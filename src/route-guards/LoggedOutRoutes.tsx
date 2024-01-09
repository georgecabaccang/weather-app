import { Navigate, Outlet } from "react-router-dom";

export default function LoggedOutRoutes() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    return !isLoggedIn ? <Outlet /> : <Navigate to="/home" />;
}
