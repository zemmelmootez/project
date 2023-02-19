import React from 'react';
import "./home.css";
import home from "../images/home.png" ;
import palagging from "../images/palagging.png"
import palagging2 from "../images/palagging2.png"
import env1 from "../images/env1.png";
import flech1 from "../images/flech1.png";
import flech2 from "../images/flech2.png";
import filtre2 from "../images/filtre2.png";
/* import hand from "../images/hand.png"; */

import girl from "../images/girl.png";
import fin from "../images/fin.png";






const Home=()=>{
return (
    <div>
    <div className='container1'>
        <div className='text'>
         <h1>Creating content 
          made easy</h1>
         <p>Whether you're a blogger, vlogger, or social media influencer,Creatify makes content creation easier and more fun than ever before.</p>
         <button>Read more</button>
        </div>
        <div className='mg'>
            <img src={home}/>
        </div>
        
    </div>
    <div className='plagging'>
     <h1>95% of clients are happy with our services</h1>   
     <div className='wave'>
     <img src={palagging} />
     <img src={palagging2} />
     </div>
    </div>
     <div className='title'>
        <h1>Our Services</h1>
        <p>At Creatify, we offer a range of services to help content creators bring their ideas to life</p>
     </div>
   <div className='services'>
        <div className='element'>
            <div className='servFlex'>
                <img src={env1}/>
                <div className='text'>
                <h2>Script To Video</h2>
                <p>Generate videos by Ai</p>
            </div>
            </div>
            <p>
            Our AI-powered script-to-video transformation service includes a range of features designed to help you create outstanding video content with ease.
            </p>
            <img id='flech1' src={flech1}></img>
        </div>

        <div className='element'>
            <div className='servFlex'>
                <img id='img2' src={filtre2}/>
                <div className='text'>
                <h2>Description Writer</h2>
                <p>Generate Description by AI</p>
                </div>
            </div>
            <p>
            Streamline your content creation process and produce high-quality descriptions in a fraction of the time with our AI-powered description writing service.
            </p>
            <img id='flech2' src={flech2}></img>
        </div>

        <div className='element'>
            <div className='servFlex'>
               {/*  <img id='hand' src={hand}/> */}
                <div className='text'>
                <h2>Sign Generator</h2>
                <p>Sign Language generator</p>
            </div>
            </div>
            <p>
            With our sign language generator, you can create video content that is fully accessible and inclusive, reaching a wider audience than ever before.
            </p>
          {/*   <img id='flech3' src={flech3}></img> */}
        </div>
    </div>

    <div className='title2'>
        <h1>Users Feedback</h1>
        <p>
        We love hearing from our users! Thank you for taking the time to share your feedback with us
        </p>
     </div>


     <div className='services'>
        <div className='element'>
            <div className='servFlex'>
                <img src={girl}/>
                <div className='text'>
                <h2>Mehrzia Ben Salem</h2>
            </div>
            </div>
            <p className='p2'>
            Streamline your content creation process and produce high-quality descriptions in a fraction of the time with our AI-powered description writing service.
            </p>
        </div>

        <div className='element'>
            <div className='servFlex'>
                <img id='img2' src={girl}/>
                <div className='text'>
                <h2>Sourour Bent Lheyy</h2>
                </div>
            </div>
            <p className='p2'>
        The sign language translations created by Creatify's service were spot-on. It's so refreshing to find a company that prioritizes accessibility.
            
            </p>
        </div>

        <div className='element'>
            <div className='servFlex'>
                <img id='hand' src={girl}/>
                <div className='text'>
                <h2>Boudour Ben Khlifa</h2>
            </div>
            </div>
            <p className='p2'>
            I appreciate how affordable and accessible Creatify's services are. As a small business owner, I can't recommend them enough!
            </p>
        </div>
    </div>


     <div id='fin'>
        <img src={fin}></img>
        <div>
            <h1>Get Our News</h1>
            <p>Join our community and stay informed. Subscribe for the latest updates, news, and promotions from Creatify!</p>
            <span>Email</span>
            <br/>
            <p>example@gmail.com</p>
            <button>Subscribe</button>
        </div>
     </div>
</div>
);
}
export default Home;