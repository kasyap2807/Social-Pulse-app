import React, { useState } from 'react';
import { useRef } from 'react';
import {useLocation,Link} from 'react-router-dom';  
import Navbar from './Navbar';
import Error from './Error';
import Dashboard from './Dashboard';
const Landingpage = () => {
    return(
        <div className='Container123'>
            {/* This Work is Prototype */}
            <div className='Land'>
            <div className="NavBar">
    <div className="Heading">
    <h1>Social Media Hub</h1>
    </div>
    <div class="mainNav">
        <Link to={`Login/`}>Login/Signup</Link>
    </div>
</div>
            <div className='headings'>
                <h1>Social Media Pulse App</h1>
                <h3>An Hub for Social Life</h3>
            <div className='Buttonforhome'>
            <Link to={`/Login`}><button>Login</button></Link>
            </div>
            </div>
            </div>
            <div className='footer' id='footer'>
                <h1>Project Name : Social Media hub</h1>
                <h3>Design and Developed By Krishna kasyap  Kanuparthi</h3>
                <p>Used NPM  : React,React-router-dom,sentiment,react-dnd-html5-backend,react-dnd,cors,bootstrap,axios</p>
                <p>Used Mvn : Spring Web,JJWT,Mysql-Drivers,Spring Data JPA</p>                
            </div>
        </div>
    );


}


export default Landingpage;