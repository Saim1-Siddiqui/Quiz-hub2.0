import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiBookshelf } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import './Navebar.css';

const Navebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="main-container">
      <div className="logo-section">
        <GiBookshelf className="logo-icon" />
        <Link to="/" className="logo-text">Quiz-Hub</Link>
      </div>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/createquiz" className="nav-link">Create-Quiz</NavLink>
        <NavLink to="/QuizIntro:html" className="nav-link">QuizIntro</NavLink>
      </div>

      <div className="profile-dropdown" ref={dropdownRef}>
        <FaUserCircle className="profile-icon" onClick={() => setDropdownOpen(prev => !prev)} />
        
        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
          <Link to="/login" className="dropdown-item">Log in</Link>
          <Link to="/signup" className="dropdown-item">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
