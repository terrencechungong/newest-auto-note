import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase/fbconfig'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { User } from 'firebase/auth';

interface MyComponentProps {
    children?: ReactNode;
}

interface AuthContextType {
    user: User | null;
}


const AuthContext = createContext<AuthContextType>({
    user: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null); 
    const navigate = useNavigate();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setUser(user);
                navigate("/home");
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [user, navigate])

    const value = { user }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )


}

