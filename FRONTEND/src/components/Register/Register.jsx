import React from "react";
import { FaUser,FaLock } from "react-icons/fa6";
import './Register.css';
const RegisterForm=()=>{
  return (
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
            <label htmlFor="">Name</label>
          <input type="text" required />
        </div>
        
        <div className="input-box">
            <label htmlFor="">Email address</label>
          <input type="email" required />
        </div>
        <div className="input-box">
            <label htmlFor="">Username</label>
          <input type="text" required />
        </div>

        <div className="input-box">
            <label htmlFor="">Password</label>
          <input type="password" required />
        </div>
        <div className="input-box">
            <label htmlFor="">Age</label>
          <input type="number" required />
        </div>
        <div className="btn">
          Register
        </div>
      </form>
    </div>
  )
}

export default RegisterForm;