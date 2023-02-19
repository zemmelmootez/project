import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../../compoments/Navbar';
function Home() {
  return (
          <>
           
          <div class="landing-page" >
          <div class="container">
          <div class="info">
      <h1>Give us Your feedback</h1>
      <p>Your feedback is apprichated and he help us to be better</p>
      <button><Link to="/login"style={{textDecoration:'none',color:'#FFF'}}>Get Started</Link></button>
    </div><div class="image">
        <img src="https://i.postimg.cc/65QxYYzh/001234.png"></img>
      </div><div class="clearfix"></div>
     </div>
     </div>
     </>
  )
}

export default Home
