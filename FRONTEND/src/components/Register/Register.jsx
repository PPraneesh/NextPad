import {useState, useContext} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './Register.css';
import axios from "axios";
import { MyContext } from "../../context-api/myContext";
import {userContext} from "../../context-api/userContext"


import { urlContext } from "../../context-api/urlContext";


const genres = [
  'Fantasy', 'Humor', 'Mystery', 'Romance', 'Thriller', 'LGBTQ+', 'Horror', 'Sci-fi', 'Paranormal', 'Adventure', 'Poetry', 'Action'
];


const RegisterForm = () => {
  const {url} = useContext(urlContext)
  const [selectedGenres, setSelectedGenres] = useState([]);
  const { register, handleSubmit } = useForm();
  const [status,setStatus] = useState(true);
  const [error, setError] = useState("")
  let {loginStatus, setLoginStatus} = useContext(MyContext)
  let {user, setUser} = useContext(userContext)
  let navigate = useNavigate();

  const handleGenreChange = (event) => {
    if (event.target.checked) {
      setSelectedGenres([...selectedGenres, event.target.value]);
    } else {
      setSelectedGenres(selectedGenres.filter(genre => genre !== event.target.value));
    }
  };
  const onSubmit = data => {
    console.log(selectedGenres)
    data={
      ...data,
      genre:selectedGenres,
      articles:[]
    }
    axios.post(url+"user-api/register", data)
    .then(res => {
      if(res.data.message==="User already exists"){
        setError("Username already exists")
      }
      else{
        console.log(res.data)
        setUser(res.data.payload)
        setLoginStatus(true)
        navigate('/user-api/home')
      }
      
    }).catch(err => {
      console.log(err)
    }
    )
  }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrapper">
        <div>
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
          <div className="input-box-genre">
            <label htmlFor="genre">Genre</label>
            <div className='checkboxgroup'>
              {genres.map((genre,index) => (
                <div className="checkbox-wrapper-47 label-checkbox" key={genre}>
                  <input
                    type="checkbox"
                    value={genre}
                    onChange={handleGenreChange}
                    name="genre"
                    id={index}
                  />
                  <label htmlFor={index}>{genre}</label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
      </div>
  );
              }
export default RegisterForm;



