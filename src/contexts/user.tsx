import { User, useAuth0 } from "@auth0/auth0-react";
import { ReactNode, createContext } from "react";

interface IAuth {
    user: User | undefined;
    isAuthenticated: boolean;
    loginUser: () => void;
    logoutUser: () => void;
}

export const AuthContext = createContext<IAuth>({
    user: undefined,
    isAuthenticated: false,
    loginUser: () => {},
    logoutUser: () => {},
});

export const AuthProvider = (props: { children: ReactNode }) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    function loginUser() {
        loginWithRedirect();
        localStorage.setItem("isLoggedIn", "yes");
    }

    function logoutUser() {
        logout();
        localStorage.removeItem("isLoggedIn");

        // also remove any forecasts date from local storage when logging out
        localStorage.removeItem("forecasts");
    }

    const UserContextValues: IAuth = {
        user,
        isAuthenticated,
        loginUser,
        logoutUser,
    };

    return <AuthContext.Provider value={UserContextValues}>{props.children}</AuthContext.Provider>;
};
