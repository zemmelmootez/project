import React from 'react';
import "./navBar.css";
import logo from "../images/logo.png" ;
import { NavLink } from 'react-router-dom';
const NavBar=()=>{
    return (
        <div className='containerrr'>
           <img src={logo}/>
            <div className='links'>
        
            <ul>
                <li><a href='#'>Our solutions</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Feedbacks</a></li>
            </ul>
            <NavLink to={"/register"}><button>Get Started</button></NavLink>
            </div>
        </div>
    );
}
export default NavBar;