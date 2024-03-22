import React, { useContext } from 'react';
import { MyContext } from '../../context-api/myContext';
import { FaImage } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { loginStatus, setLoginStatus } = useContext(MyContext)

    function handleLogin() {
        setLoginStatus(true)
    }

    return (
        <div className="header">
            <nav className='container'>
                <div className="left">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <img src={FaImage} />
                        </li>
                        <li className="nav-item">
                            Browse
                        </li>
                        <li className="nav-item">
                            Community
                        </li>
                        <li className="nav-item">
                            <input type="text" placeholder="Search"></input>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <ul className="nav-menu">
                        {
                            loginStatus === true ? (
                                <>
                                    <li className="nav-item">
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <button onClick={() => setLoginStatus(false)}>LogOut</button>
                                    </li>
                                </>
                            ) :
                                (
                                    <>  <Link to='/user-api/login'>
                                            <li className="nav-item">
                                                <button onclick={handleLogin}>Login</button>
                                            </li>
                                        </Link>
                                        <li className="nav-item">
                                            <button>Register</button>
                                        </li>
                                    </>
                                )

                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}