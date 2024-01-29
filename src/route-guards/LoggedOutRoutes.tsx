import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

export default function LoggedOutRoutes() {
    const { user } = useAuth0();
    const savedForcast = localStorage.getItem("forecasts");

    return !user ? (
        <Outlet />
    ) : savedForcast ? (
        <Navigate to="/forecast" />
    ) : (
        <Navigate to="/home" />
    );
}
