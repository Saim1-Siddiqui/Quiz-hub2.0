import React from 'react'
import './Lending.css'
import { MdQuiz } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Lending() {
  
    
  return (
    
    <div className="container">
      <hr/>
      <div className='pic-1'></div>

      <h1 className='why-choose'>Why Choose Quiz-Hub ?</h1>
     <p className='why-choose-2'>Quiz-Hub offers a unique hub of features designed to enhance your quiz experience</p>
        <div className='box'>
            <div className='box-1'><FaPlus className='icon-2'/> <h1>
                Create Your own Quizes 
              </h1>
              <p>Easily design and customise Quizes with our user-friendly tools</p>
              </div>
            <div className='box-2'>
            <FaUserFriends className='icon-3'/>
               <h1>
                   Connect with friends 
               </h1>
                   <p>
                       Share Quizes with friends and compete for higher score 
                   </p>
            </div>
            <div className='box-3'> <GiProgression className='icon-4'/> 
              <h1>
                  Track your progress
              </h1>
               <p>
                   Monitor your performance and see how you stack up against other
               </p>
               
            </div>
        </div>
      
 




  </div> 
  )
}

export default Lending