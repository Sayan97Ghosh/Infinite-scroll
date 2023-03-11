import React from 'react'
import { Route, Routes } from "react-router-dom";
import LoginForm from '../Pages/LoginForm';
import SignupForm from '../Pages/Signup';
import Home from '../Pages/Home';
import Privateroute from '../Components/Privateroute';
function Allroutes() {
  return (
    <Routes>

    <Route path="/" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />

    <Route path="/private" element={<Privateroute/>}>
    <Route path="home" element={<Home/>} />
    </Route>

    <Route path="*" element={<h1>404 | Not Found</h1>} />
    </Routes>
  )
}

export default Allroutes
