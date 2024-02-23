import React, { useState } from 'react';
import { useRef } from 'react';
import {useLocation,Link} from 'react-router-dom';  
import Navbar from './Navbar';
import Error from './Error';
import Dashboard from './Dashboard';
const Home = () => {
    const location = useLocation();
    const token1 = location.state?.token;
    console.log(token1);


    const socialRef = useRef(null); // Reference to the element with id "social"

  const handleClick = () => {
    if (socialRef.current) {
      socialRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    if(token1!=undefined){
    return(
        <div className='Container123'>
            {/* This Work is Prototype */}
            <div className='Land'>
            <Navbar token={token1}/>
            <div className='headings'>
                <h1>Social Media Pulse App</h1>
                <h3>An Hub for Social Life</h3>
            <div className='Buttonforhome'>
            <Link to={`/Home#social`}
        state={{ token: token1 }} onClick={handleClick}><button>Social Apps</button></Link>
                <Link to={`/About`}
        state={{ token: token1 }}><button>aboutdev</button></Link>
            </div>
            </div>
            </div>
            <div className='social' id='social' ref={socialRef}>
            <h1>DashBoard</h1>
            <Dashboard token={token1}/>
            </div>
            <div className='footer' id='footer'>
                <h1>Project Name : Social Media hub</h1>
                <h3>Design and Developed By Krishna kasyap  Kanuparthi</h3>
                <p>Used NPM  : React,React-router-dom,sentiment,react-dnd-html5-backend,react-dnd,cors,bootstrap,axios</p>
                <p>Used Mvn : Spring Web,JJWT,Mysql-Drivers,Spring Data JPA</p>
                <Link to={`/About`} state={{ token: token1 }} onClick={handleClick}><p>Contact Me...</p></Link>
                
            </div>
        </div>
    );
}
else{
    return(
        <div>
            <Error/>
        </div>
    )
}

}


export default Home;