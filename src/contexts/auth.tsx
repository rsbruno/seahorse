import React,
{
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react'

type User = {
    id: String;
    username: string;
}

type AuthContextData = {
    user: User;
    setUser: (t:User) => (void);
}

type AuthContextProps = {
    children: ReactNode
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps) {

    const [user, setUser] = useState<User>({} as User);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}