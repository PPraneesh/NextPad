import React from 'react';



export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <h1>Blog</h1>
            </div>
            <div className="nav-links">
                <a href="/user-api/home">Home</a>
                <a href="/user-api/new-article">New Article</a>
                <a href="/user-api/user-profile">User Profile</a>
            </div>
        </div>
    )
}