
import React from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import Navebar from './pages/Layouts/Navebar'
import  Sidebar  from './pages/Layouts/Sidebar'
import Dashboard from  './pages/Dashboard/Dashboard'
import  QuizIntro from './pages/Quiz/QuizIntro'
import  AttemptQuiz from './pages/Quiz/AttemptQuiz'
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
  const location = useLocation()
  return (
    < >
   { location.pathname!="/login" && location.pathname!="/signup" &&  location.pathname!="/Forget" &&
  <Navebar/>}
 <div className='app-container'>
 { location.pathname!="/login" && location.pathname!="/signup" &&  location.pathname!="/Forget" && <Sidebar/>}
<Routes> 
 {/* <Route path='/' element={<Navebar/>}/>
 <Route path='/SideBar' element={<Sidebar/>}/> */}
 <Route path='/' element={<Lending/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/Forget' element={<Forget/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
<Route path="/QuizIntro/:category" element={<QuizIntro />} />
  <Route path='/AttemptQuiz/:category' element={<AttemptQuiz/>}/>
  <Route path='/CreateQuiz' element={<CreateQuiz/>}/>
  <Route path='/ScoreCard' element={<ScoreCard/>}/>
  <Route path='/Leadingboard' element={<Leadingboard/>}/>

</Routes>
 </div>
    </>
  )
}

export default App