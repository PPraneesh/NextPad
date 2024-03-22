import React from "react";
import { FaUser,FaLock } from "react-icons/fa6";
import './Loginform.css';
const LoginForm=()=>{
  return (

<div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
          <label htmlFor="">
            <input type="checkbox" id="" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <div className="btn">
          Login
        </div>
        <div className="register-link">
          <p>
          Not having an account? <a href="">Register</a>
          </p>
        </div>
      </form>
    </div>
  

  )
}

export default LoginForm;