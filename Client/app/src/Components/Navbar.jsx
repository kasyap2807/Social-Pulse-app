import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  const token1 = props.token;
  return (
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
  )
}

export default Navbar