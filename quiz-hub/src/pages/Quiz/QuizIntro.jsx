import React, { useEffect, useState } from 'react'
import './QuizIntro.css'
import {NavLink} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import { useQuiz } from '../../store/Context-api';
import { useParams } from 'react-router-dom';

function QuizIntro() {
  const [quizData,setQuizData]=useState(null)
   const { category } = useParams(); 
   const {data} =useQuiz()
   useEffect(()=>{
   const selectedQuiz = data.find((quiz) => quiz.category === category);

    if(selectedQuiz){
      setQuizData(
        {
        title: selectedQuiz.title,
        description: selectedQuiz.description,
        totalQuestion: selectedQuiz.questions.length,
        timeLimit: `${selectedQuiz.timeLimit} min`,
        diffculty: selectedQuiz.difficulty
        }
      )
    } 
   },[category,data])
     if (!quizData) return <p>Loading...</p>;
  return (
    <div className='Quiz-container'>
      <div className="hero-image">
        <img src="\Images\QuizIntro.png" alt="" className='Intro-imge' />
        <div className='Intro-content'>
          <p className='.Intro-line'>{quizData.description}</p>
        <h2 className='Intro-title'>{quizData.title}</h2>
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
        <span>{quizData.timeLimit}</span>
         </div>
        </div>
       <div className='bottom-wrap'>
         <div className="Quiz-level">
           <p className='Intro-border-bottom'></p>
           <div className='diffculty-level'>
            <p className='offcolor'>Diffculty</p>
            <p>{quizData.diffculty}</p>
           </div>
           </div>
         <div className='startbutton'>
 <NavLink to={`/AttemptQuiz/${category}`} className="start-link">

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