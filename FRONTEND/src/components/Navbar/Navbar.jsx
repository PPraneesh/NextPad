import React, { useContext } from 'react';
import { MyContext } from '../../context-api/myContext';
import { FaImage } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const { loginStatus, setLoginStatus } = useContext(MyContext)
    let navigate = useNavigate()
    function handleLogout() {
        setLoginStatus(false)
        navigate('/')
    }
    return (
        <div className="navbar">

                <div className="left">
                    {/* <ul className="nav-menu">
                        <li className="nav-item">
                            <h2>NextPad</h2>
                        </li>
                        <li className="nav-item">
                            <input type="text" placeholder="Search"></input>
                        </li>
                    </ul> */}
                    <Link to='/user-api/home'>
                    <h2>NextPad</h2>
                    </Link>
                    
                </div>
                <div className="center">
                    <input type="text" placeholder='Search Articles...' className='searchbar' />
                </div>
                <div className="right">
                    <ul className="nav-menu">
                        {
                            loginStatus === true ? (
                                <>
                                    <Link to='/user-api/new-article'>
                                        <li className="nav-item">
                                            <button className='bbb'>Write</button>
                                        </li>
                                    </Link>
                                    <li className="nav-item">
                                        <Link to="/user-api/user-profile"> <button className='bbb'>Profile</button> </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/'>
                                        <button onClick={handleLogout} className='bbb'>LogOut</button>
                                        </Link>
                                    </li>
                                </>
                            ) :
                                (
                                    <>

                                        <Link to='/user-api/login'>
                                            <li className="nav-item">
                                                <button>Login</button>
                                            </li>
                                        </Link>
                                        <Link to="/user-api/register">
                                            <li className="nav-item">
                                                <button>Register</button>
                                            </li>
                                        </Link>
                                    </>
                                )
                        }
                    </ul>
                </div>
        </div>
    )
}