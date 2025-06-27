import React, { useState } from 'react'
import './QuizIntro.css'
import {NavLink} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';

function QuizIntro() {
  const [quizData,setQuizData]=useState({
    Quiz_title:"web",
    Quiz_description:"This quiz is about  of web development focus on Frontend skill with HTML,CSS<java Script and Ract",
    totalQuestion:"30",
    time_limit:"40mint",
    diffculty_level:"low"
  })
  return (
    <div className='Quiz-container'>
      <div className="hero-image">
        <img src="\Images\QuizIntro.png" alt="" className='Intro-imge' />
        <div className='Intro-content'>
          <p className='.Intro-line'>{quizData.Quiz_description}</p>
        <h2 className='Intro-title'>Quiz Details</h2>
       <div className="Intro-boarder">
         <p className='Intro-border-left'></p>
        <p className='Intro-border-right'></p>
        
       </div>
       <div className="Quizdetails">
          <div>
            <p className='offcolor'>Number of Question</p>
          <span>{quizData.totalQuestion}</span>
          </div>
         <div>
           <p className='offcolor'>Time Limit</p>
        <span>{quizData.time_limit}</span>
         </div>
        </div>
       <div className='bottom-wrap'>
         <div className="Quiz-level">
           <p className='Intro-border-bottom'></p>
           <div className='diffculty-level'>
            <p className='offcolor'>Diffculty</p>
            <p>{quizData.diffculty_level}</p>
           </div>
           </div>
         <div className='startbutton'>
   <NavLink to="/AttemptQuiz" className="start-link ">
      <FaArrowRight/>
    </NavLink>
</div>
       </div>

        </div>

      </div>
    </div>
  )
}

export default QuizIntro