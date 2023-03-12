import React, { useState } from "react";
import "./LoginForm.css";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const obj = {
    name:username,
    password:password,
    token:1234,
  }


  //  useNavigate hook

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && password){
        localStorage.setItem("data",JSON.stringify(obj));
        toast('🦄 Signup Successful!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

          setTimeout(()=>{

            navigate("/")
          },1300)
          
    }
    else{
       alert("Please Enter all the details")
    }
  
  }

  return (
    <div className="container">
      <h1 className="title">Sign In</h1>
      <p className="subtitle">
        Please <span className="extra-text">Sign up</span> using your username and password ✨!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
         
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
         {/* checkbox here */}
        </div>
        <hr className="divider"></hr>
        <input type="submit" value="Sign Up" className="login_button" />
      </form>
      <div className="link_container">
        <a href="#" alt="this is value" className="small">
          Forgot Password?
        </a>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SignupForm;