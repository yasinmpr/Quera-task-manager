import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isLogin, setIslogin] = useState(false);
    const logoutHandler = () => {
        setIslogin(false);
    };
    const loginHandler = () => {
        setIslogin(true);
    };
    return (
        <AuthContext.Provider value={[isLogin, loginHandler, logoutHandler]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
