import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        name: '',
        color: 'purple'
    });

    //local storage
    useEffect(() => {
        const userStorage = localStorage.getItem('user')
        userStorage ? setUser(JSON.parse(userStorage)) : setUser({
            name: ''
        })
    }, [])

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}