import { User, useAuth0 } from "@auth0/auth0-react";
import { ReactNode, createContext, useEffect } from "react";

interface IAuthContextProps {
    user: User | undefined;
    isAuthenticated: boolean;
    loginWithRedirect: () => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContextProps>({
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

    const GameContextValues: IAuthContextProps = {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    };

    return <AuthContext.Provider value={GameContextValues}>{props.children}</AuthContext.Provider>;
};
