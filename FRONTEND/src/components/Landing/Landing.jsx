import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

export default function HomePage(){
  return ( 
    <div className='landing'>
      <div className="container">
          <div className="left">
              <h1>Welcome to Our Creative Writing Platform</h1>
              <p>Join our community of creative writers and share your work with fellow enthusiasts.</p>
              <p>Discover new literary pieces, receive valuable feedback, and grow as a writer or a reader.</p>
              <Link to="/user-api/login">
              <button className="btn">Get Started</button>
              </Link>
          </div>
          <div className="right">
              <img src="https://scribblersindia.com/wp-content/uploads/2022/07/vector.png" alt="Creative Writing" />
          </div>
      </div>
    </div>
  )
}