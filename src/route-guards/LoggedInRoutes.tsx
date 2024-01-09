import { useContext, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/user";

export default function LoggedInRoutes() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return navigate("/");
    }, [user]);

    return <Outlet />;
}
