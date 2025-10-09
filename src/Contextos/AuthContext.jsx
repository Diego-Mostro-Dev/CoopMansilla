import { createContext, useContext, useState, useEffect } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { user, isAuthenticated, loginWithRedirect, logout, isLoading, getAccessTokenSilently } = useAuth0();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            if (isAuthenticated) {
                const accessToken = await getAccessTokenSilently();
                setToken(accessToken);
            }
        };
        getToken();
    }, [isAuthenticated, getAccessTokenSilently]);

    return (
        <AuthContext.Provider value={{
            user, isAuthenticated, loginWithRedirect, logout, token, isLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
