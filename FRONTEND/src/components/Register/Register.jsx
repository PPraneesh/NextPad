import React, {useState, useContext} from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Register.css';
import axios from "axios";
import { MyContext } from "../../context-api/myContext";
import {userContext} from "../../context-api/userContext"




const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("")
  let {loginStatus, setLoginStatus} = useContext(MyContext)
  let {user, setUser} = useContext(userContext)
  let navigate = useNavigate();
  const onSubmit = data => {
    data={
      ...data,
      articles:[]
    }
    axios.post("https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/register", data)
    .then(res => {
      if(res.data.message==="User already exists"){
        setError("Username already exists")
      }
      else{
        console.log(res.data)
        setUser(res.data)
        setLoginStatus(true)
        navigate('/user-api/home')
      }
      
    }).catch(err => {
      console.log(err)
    }
    )
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        {error.length !== 0 && <p className="error">{error}</p>}
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input {...register("name")} type="text" className='input' required />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email address</label>
          <input {...register("email")} type="email" className='input' required />
        </div>
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input {...register("username")} type="text" className='input' required />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" className='input' required />
        </div>
        <div className="input-box">
          <label htmlFor="age">Age</label>
          <input {...register("age")} type="numeric" className='input' required />
        </div>
        <button type="submit" className='registerbtn'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm;