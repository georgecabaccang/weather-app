import { User, useAuth0 } from "@auth0/auth0-react";
import { ReactNode, createContext, useEffect } from "react";

interface IAuth {
    user: User | undefined;
    isAuthenticated: boolean;
    loginWithRedirect: () => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuth>({
    user: undefined,
    isAuthenticated: false,
    loginWithRedirect: () => {},
    logout: () => {},
});

export const AuthProvider = (props: { children: ReactNode }) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    useEffect(() => {
        console.log(user);
    }, [user]);

    const UserContextValues: IAuth = {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    };

    return <AuthContext.Provider value={UserContextValues}>{props.children}</AuthContext.Provider>;
};
