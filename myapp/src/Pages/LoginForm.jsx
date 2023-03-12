import React, { useState } from "react";
import "./LoginForm.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 
 const data = JSON.parse(localStorage.getItem("data"));
 console.log(data)


  // useNavigate

 

  // handlesubmit function bellow

  const handleSubmit = (e) => {
   e.preventDefault();

   if(username && password){

   if(data.name === username && data.password === password ){
      localStorage.setItem("token",JSON.stringify(1234))

      toast('🦄 Login Successful!Home Access Granted', {
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
          window.location.reload();
          
        },1300);
       

      
   }
   else if (data.name == null && data.password == null) {
     alert("User is not registered")
   }
   else{
    alert("Wrong Credentials")
   }
  }
  else{
    alert("Please Fill The DEtails")
   }
   
  }

  return (
    <div className="container">
      <h1 className="title">Sign In</h1>
      <p className="subtitle">
        Please <span className="extra-text">log in</span>  using your username and password!
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
       
        </div>
        <hr className ='divider'></hr>
        <input type="submit" value="Log In" className="login_button" />
      </form>
      <div className="link_container">
        <a href="#" className="small">
          Forgot Password?
        </a>
      </div>
     <ToastContainer/>
    </div>
  );
};

export default LoginForm;