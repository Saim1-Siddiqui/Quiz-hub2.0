
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navebar from './pages/Layouts/Navebar'
import  Sidebar  from './pages/Layouts/Sidebar'
import Dashboard from  './pages/Dashboard/Dashboard'
import  QuizIntro from './pages/Quiz/QuizIntro'
import  QuizForm from './pages/Quiz/QuizForm'
import  CreateQuiz from './pages/Quiz/CreateQuiz'
import Lending from './pages/Auth/Lending'
import Login from './pages/Auth/Login'
import  Signup from './pages/Auth/Signup'
import Forget from './pages/Auth/Forget'
// import ScoreCode from './pages/ExtraPages/ScoreCarde'
import Leadingboard from './pages/ExtraPages/Leaderboard'
// import ScoreCarde from './pages/ExtraPages/ScoreCard'
import ScoreCard from './pages/ExtraPages/ScoreCard'


function App() {
  return (
    < >
  <Navebar/>
 <div className='app-container'>
 <Sidebar/>
<Routes> 
 {/* <Route path='/' element={<Navebar/>}/>
 <Route path='/SideBar' element={<Sidebar/>}/> */}
 <Route path='/' element={<Lending/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/Forget' element={<Forget/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
<Route path="/QuizIntro/:category" element={<QuizIntro />} />
  <Route path='/QuizForm' element={<QuizForm/>}/>
  <Route path='/CreateQuiz' element={<CreateQuiz/>}/>
  <Route path='/ScoreCard' element={<ScoreCard/>}/>
  <Route path='/Leadingboard' element={<Leadingboard/>}/>

</Routes>
 </div>
    </>
  )
}

export default App