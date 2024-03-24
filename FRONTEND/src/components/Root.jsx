import {useState} from "react";
import Navbar from './Navbar/Navbar'
// import Footer from './Footer/Footer'
import { MyContext } from "../context-api/myContext";
import { userContext } from "../context-api/userContext";
import { Outlet } from "react-router-dom";

export default function Root(){
    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState({})

    return(
        <div>
            <userContext.Provider value={{user,setUser}}>
            <MyContext.Provider value={{loginStatus,setLoginStatus}}>
                <Navbar/>
                <div className="outlet-cont">
                <Outlet />
                </div>
                {/* <Footer/> */}
            </MyContext.Provider>
            </userContext.Provider>
        </div>
    )
}
