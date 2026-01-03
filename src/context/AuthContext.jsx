import { createContext, userState } from "react";
export const Authcontext = createContext();
export const AuthProvider = ({ children}) => {const [user, setUser] = useState(JSON.perse(localStorage.getItem("user")) || null);
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user",JSON.stringify(userData));
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };
    return (
        <Authcontext.Provider value={{ user, login, logout}}>{children}</Authcontext.Provider>

    );
};