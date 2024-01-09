import { useContext, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/user";

export default function LoggedOutRoutes() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) return navigate("/home");
    }, [user]);

    return <Outlet />;
}
