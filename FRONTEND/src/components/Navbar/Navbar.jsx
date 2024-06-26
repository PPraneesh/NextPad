import { useContext, useEffect } from 'react';
import { MyContext } from '../../context-api/myContext';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const { loginStatus, setLoginStatus } = useContext(MyContext)
    let navigate = useNavigate()
    function handleLogout() {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        setLoginStatus(false)
        navigate('/')
    }
    //remove token from local storage when logged out in handleLogout
    //if token is valid == loginstatus=true else false
    //login -onclick verify token, if token is present and valid , navigate to home page 
    useEffect(() => {
        const sessionToken = sessionStorage.getItem('token')
        if (sessionToken) {
            setLoginStatus(true)
        }
    }, [])  
     
    return (
        <div className="navbar">
                <div className="left">
                    <Link to={ loginStatus ? '/user-api/home' : '/' }>
                    <h2 className="textt">NextPad</h2>
                    </Link>
                    <input type="text" placeholder='Search Articles...' className='searchbar' />
                </div>
                    <div className="right">
                        {
                            loginStatus === true ? (
                                <>
                                    <Link to='/user-api/new-article'>
                                        <div className="nav-item">
                                            <button className='nav-button'>Write</button>
                                        </div>
                                    </Link>
                                    <div className="nav-item">
                                        <Link to="/user-api/user-profile"> <button className='nav-button'>Profile</button> </Link>
                                    </div>
                                    <div className='nav-item'>
                                        <Link to='/'>
                                        <button className='nav-button' onClick={handleLogout} >LogOut</button>
                                        </Link>
                                    </div>
                                </>
                            ) :
                                (
                                    <>

                                        <Link to='/user-api/login'>
                                            <div className="nav-item">
                                                <button className='nav-button'>Login</button>
                                            </div>
                                        </Link>
                                        <Link to="/user-api/register">
                                            <div className="nav-item">
                                                <button className='nav-button'>Register</button>
                                            </div>
                                        </Link>
                                    </>
                                )
                        }
                    </div>
        </div>
    )
}