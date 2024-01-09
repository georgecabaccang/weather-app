import { User, useAuth0 } from "@auth0/auth0-react";
import { ReactNode, createContext } from "react";

interface IAuthContextProps {
    user: User | undefined;
    isAuthenticated: boolean;
    loginWithPopup: () => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContextProps>({
    user: undefined,
    isAuthenticated: false,
    loginWithPopup: () => {},
    logout: () => {},
});

export const AuthProvider = (props: { children: ReactNode }) => {
    const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

    const GameContextValues: IAuthContextProps = {
        user,
        isAuthenticated,
        loginWithPopup,
        logout,
    };

    return <AuthContext.Provider value={GameContextValues}>{props.children}</AuthContext.Provider>;
};
