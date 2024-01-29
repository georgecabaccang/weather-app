import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

export default function LoggedInRoutes() {
    const { user } = useAuth0();

    return user ? <Outlet /> : <Navigate to="/" />;
}
