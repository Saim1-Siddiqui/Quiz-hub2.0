import React from 'react'
import './Dashboard.css'
import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    // only for checking you can remove it
    <div><NavLink to={`/QuizIntro/html`}>Start HTML Quiz</NavLink>
<NavLink to={`/QuizIntro/css`}>Start CSS Quiz</NavLink>
<NavLink to={`/QuizIntro/javascript`}>Start JavaScript Quiz</NavLink>
<NavLink to={`/QuizIntro/react`}>Start React Quiz</NavLink>
</div>
  )
}

export default Dashboard