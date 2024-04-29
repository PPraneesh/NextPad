import {useState} from "react";
import Navbar from './Navbar/Navbar'
// import Footer from './Footer/Footer'
import { MyContext } from "../context-api/myContext";
import { userContext } from "../context-api/userContext";
import { urlContext } from '../context-api/urlContext';
import { Outlet } from "react-router-dom";

export default function Root(){
    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState({})
    const [url,setUrl] = useState("http://localhost:5000/")
    
    return(
        <div>
            <userContext.Provider value={{user,setUser}}>
            <MyContext.Provider value={{loginStatus,setLoginStatus}}>
            <urlContext.Provider value={{url}}>
                <Navbar/>
                <div className="outlet-cont">
                <Outlet />
                </div>
                {/* <Footer/> */}
            </urlContext.Provider>
            </MyContext.Provider>
            </userContext.Provider>
        </div>
    )
}
