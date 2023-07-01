import { createContext, useEffect, useState } from 'react'

import axios from 'axios'

export const Authcontext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUSer] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const login = async (inputs) => {
        const res = await axios.post('http://localhost:8000/api/auth/login', inputs)
        setCurrentUSer(res.data)
    }

    const logout = async () => {
        await axios.post('http://localhost:8000/api/auth/logout')
        setCurrentUSer(null)
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <Authcontext.Provider value={{ currentUser, login, logout }}>{children}</Authcontext.Provider>
    )
}