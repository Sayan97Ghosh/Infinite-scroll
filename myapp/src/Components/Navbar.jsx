import React from 'react'
import { isLoggedIn } from '../Auth/Auth'
import "./Navbar.css";
function Navbar() {
    const status = isLoggedIn();

    const handleLogout = () =>{
        alert("Are You sure want to logout ? ")
        window.localStorage.clear();
        window.location.reload();
    }
  return (
    <div className='navbar'>
        <img src='This is for logo'/>

        <div className='items'>
        <p><a href="/private/home">
            Home
                </a>
                </p>
            {status === true ? <a href="/"> <button className='login_button' onClick={handleLogout}>Log Out </button></a> : <a href="/"><button className='login_button'>Log in </button></a>}
            <a href="/signup">
            <button className='login_button'>Sign Up</button>

            </a>
        </div>
    </div>
  )
}

export default Navbar
