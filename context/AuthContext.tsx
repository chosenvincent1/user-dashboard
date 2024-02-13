import React, { useState, ReactNode, Dispatch, SetStateAction, createContext } from 'react'

type AuthContextProps = {
    children: ReactNode;
}

type AuthContextType = {
    isAuth: boolean,
    setIsAuth: Dispatch<SetStateAction<boolean>>,
}

export const AuthContext = createContext<AuthContextType>({
    isAuth: false,
    setIsAuth: ()=> { },
});

export const AuthContextProvider = ({children}: AuthContextProps)=> {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}