import React from 'react';
import {useLocation,Link} from 'react-router-dom';  
import '../Asserts/About.css';
import img from '../Asserts/coser.jpg';

const AboutPage = () => {
    const location = useLocation();
    const token1 = location.state?.token;
    console.log(token1)
    
    if(token1!=undefined){
  return (
    <div className="about">
          <div className="NavBar">
    <div className="Heading">
    <h1>Social Media Hub</h1>
    </div>
    <div class="mainNav">
        <Link to={`/Home`}
        state={{ token: token1 }}>Home</Link>
        <Link to={`/About`}
        state={{ token: token1 }}>about</Link>
        <a href="/Settings">Settings</a>
        <a href="/">logout</a>
    </div>
</div>
          <div className="containerAbout">
            <div className="left">
              <h1>About myself</h1>
              <p>
                Hey there! I'm Krishna Kasyap Kanuparthi, a full-stack web developer and a dedicated Computer Science Engineering (CSE) student. My journey in technology has led me to explore various facets of web development, from crafting beautiful user interfaces to building robust backend systems. With a passion for both frontend and backend technologies, I thrive on the challenges and excitement of creating seamless web experiences. As a firm believer in the potential of Artificial Intelligence (AI) and the transformative power of technology, I'm committed to leveraging my skills to push the boundaries of innovation in the digital realm. Let's build the web of tomorrow, one line of code at a time!
              </p>
            </div>
            <div className="right">
              <div className="frame"> 
                <img className="image" src={img} />
              </div>
            </div>
          </div>
          <div className="details">
            <a href="www.linkedin.com/in/krishnakasyap" className="Link">🔗linkedin</a><br />
            <a href="https://github.com/kasyap2807" className="Link">🔗gitHub</a><br />
            <a href="kanuparthikasyap95@gmail.com" className="Link">🔗E-mail</a>
          </div>
          </div>
  );
    }
};

export default AboutPage;
