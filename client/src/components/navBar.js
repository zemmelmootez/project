import React from 'react';
import "./navBar.css";
import logo from "../images/logo.png" ;
const NavBar=()=>{
    return (
        <div className='container'>
           <img src={logo}/>
            <div className='links'>
        
            <ul>
                <li><a href='#'>Our solutions</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Feedbacks</a></li>
            </ul>
            <button>Get Started</button>
            </div>
        </div>
    );
}
export default NavBar;