import React, { useState } from 'react';
import { AuthContext } from "../providers/auth";

const Login = () => {
    const [input, setInput] = useState({
        name: ''
    })
    const { setUser } = React.useContext(AuthContext)

    const handleLogin = () => {
        localStorage.setItem('user', JSON.stringify(input))
        setUser(input)
    }

    const handleLogout = () => {
        localStorage.removeItem('user', JSON.stringify(input))
        setUser({
            name: ''
        })
    }

    return (
        <>
            <input onChange={(e) => setInput({ name: e.target.value })}/>
            <button onClick={handleLogin}> Login </button>
            <button onClick={handleLogout}> Logout </button>
        </>
    );
}

export default Login