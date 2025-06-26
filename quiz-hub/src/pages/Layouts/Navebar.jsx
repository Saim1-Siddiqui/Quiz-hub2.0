import React from 'react'
import './Navebar.css'
import { Link,NavLink } from 'react-router-dom';
import {GiBookshelf} from 'react-icons/gi';

function Navebar() {
  return (
    <div className='main-container'>
      <div className="logo-section">
        <GiBookshelf className="logo-icon"/>
       <Link to="/" className="logo-text">Quiz-Hub</Link>
      </div>

      <div className="nav-links">
        <NavLink to="/Home" className="nav-link">Home</NavLink>
        <NavLink to="/Create" className="nav-link">Create</NavLink>
        <NavLink to="/Explore" className="nav-link">Explore</NavLink>
      </div>
      <div className="nav-buttons">
        <Link to="/login">
        <button className='login-btn'>Log in</button>
        </Link>
        <Link to="/signup">
        <button className='signup-btn'>Sgin up</button>
        </Link>
      </div>
    </div>
   
    
  )
}

export default Navebar