import { createContext, useEffect, useState } from 'react'

import axios from 'axios'

export const Authcontext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUSer] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const login = async (inputs) => {
        const res = await axios.post('https://node-blog-wxtc.onrender.com/api/auth/login', inputs)
        setCurrentUSer(res.data)
    }

    const logout = async () => {
        await axios.post('https://node-blog-wxtc.onrender.com/api/auth/logout')
        setCurrentUSer(null)
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <Authcontext.Provider value={{ currentUser, login, logout }}>{children}</Authcontext.Provider>
    )
}