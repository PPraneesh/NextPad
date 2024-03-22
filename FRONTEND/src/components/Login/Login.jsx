import {React, useContext,useState} from "react";
import { set, useForm } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";
import './LoginForm.css';
import axios from "axios"
import { MyContext } from "../../context-api/myContext";
import {userContext} from "../../context-api/userContext"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Login() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("")
  let {loginStatus, setLoginStatus} = useContext(MyContext)
  let {user, setUser} = useContext(userContext)
  let navigate = useNavigate();
  const onSubmit = data => {
    axios.post('https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/login', data)
    .then(res => {
      if(res.data.message === "Invalid username") 
      setError("Invalid username")
      else if(res.data.message === "Invalid password")
      setError("Invalid password")
      else {
        setLoginStatus(true)
        setUser(res.data.user)
        navigate('/user-api/home')
      }
    })
    .catch(err => {
      console.log(err)
    } 
    )
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        {error.length !== 0 && <p className="error">{error}</p>}
        <h1>Login</h1>
        <div className="input-box">
          <input {...register("username")} type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input {...register("password")} type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <button type="submit" >
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an Account? <Link to='/user-api/register'>Register</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;