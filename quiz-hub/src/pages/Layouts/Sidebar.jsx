import React from 'react'
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { GiAtom } from 'react-icons/gi';
import { TbMath } from 'react-icons/tb';
import { MdComputer, MdDashboard } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';




function Sidebar() {
  return (
    <aside className='main-sidebar'>
      {/* <h1 className="logo">Side-bar</h1> */}
      <nav className="nav">
         <NavLink to="/Dashboard" className="Quiz-hub">
         <FontAwesomeIcon icon={faHouse} className="icon" />Dashboard
        </NavLink>
        <NavLink to ="/Science" className="Quiz-hub"> 
        <GiAtom className="icon"/> Science
        </NavLink>
        <NavLink to="/Math" className="Quiz-hub">
         <TbMath className="icon"/> Math
        </NavLink>
        <NavLink to="/Computer" className="Quiz-hub">
         <MdComputer className='icon' />Categories
        </NavLink>
       
      </nav>
    </aside>
  )
}

export default Sidebar
