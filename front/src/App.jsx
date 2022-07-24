import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Homepage from './components/homepage/Homepage'
import Error from './components/error/Error'
import Signup from './components/signup/Signup'
import Profile from './components/profile/Profile'
import Login from './components/login/Login'
import UpdateProfile from './components/profile/UpdateProfile'
import Test from './components/test/Test'

const App = () => {
    const [token, setToken] = useState();

    if(!token) {
        return(
            <Login setToken={setToken} />
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="updateprofile" element={<UpdateProfile />} />
                <Route path='test' element={<Test />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
