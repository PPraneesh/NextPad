import { Link } from "react-router-dom";
import './Landing.css'

export default function HomePage(){
  return ( 
    <div className='landing'>
      <div className="landingCont">
          <div className="land-left">
              <h1>Welcome to NextPad <br />A Creative Writing Platform</h1>
              <p>Join our community of creative writers and share your work with fellow enthusiasts.</p>
              <p>Discover new literary pieces, receive valuable feedback, and grow as a writer or a reader.</p>
              <Link to="/user-api/login">
              <button className="land-btn">Get Started</button>
              </Link>
          </div>
          <div className="land-right">
              <img src="https://scribblersindia.com/wp-content/uploads/2022/07/vector.png" alt="Creative Writing" />
          </div>
      </div>
    </div>
  )
}