import { createContext } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    loading: boolean;
}

export const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: (value: boolean) => {},
    loading: true,
});