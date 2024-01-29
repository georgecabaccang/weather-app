import { User, useAuth0 } from "@auth0/auth0-react";
import { ReactNode, createContext } from "react";

interface IAuth {
    user: User | undefined;
    isAuthenticated: boolean;
    loginWithRedirect: () => void;
    logoutUser: () => void;
    isLoading: boolean;
}

export const AuthContext = createContext<IAuth>({
    user: undefined,
    isAuthenticated: false,
    loginWithRedirect: () => {},
    logoutUser: () => {},
    isLoading: true,
});

export const AuthProvider = (props: { children: ReactNode }) => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    function logoutUser() {
        logout();
        localStorage.removeItem("forecasts");
    }

    const UserContextValues: IAuth = {
        user,
        isAuthenticated,
        loginWithRedirect,
        logoutUser,
        isLoading,
    };

    return <AuthContext.Provider value={UserContextValues}>{props.children}</AuthContext.Provider>;
};
