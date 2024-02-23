import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from './Components/Login';
import './Asserts/Login.css';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import './App.css'
import './Asserts/Home.css'
import AboutPage from './Components/AboutPage';
import Social from './Components/Social';
import Landingpage from './Components/Landingpage';
function App() {
  

  return (
    <div className='Appmain'>
      <Routes>
      <Route path="/" element={<Landingpage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Social" element={<Social/>} />
      </Routes>
        {/* <Dashboard/> */}
        {/* <Home/> */}

        <ToastContainer />
        </div>

  );

  
}


export default App;