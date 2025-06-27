import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
  return (
    
   
    <div className='login-container'>
    <hr/>
      <div className='login-div'>
      <h1>
              Login into Quiz-hub
          </h1>
         
      <div className='inputpro'>
           <h3 className='email'>Email</h3>
         <input type='Email' name='Email' placeholder='Enter your Email' className='input-1'></input>
           <div className="input22">
           <h3 className='password'>Password</h3>
         <input type='password' name='password' placeholder='password' className='input-2'></input>
         </div>
      </div>
      </div>
      <p>
        <Link to="/forgot-password" className='forget'>Forgot Password?</Link>
      </p>
        <button className='btn-login'> Login</button>
        <p className='signup-p'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
    
  )
}

export default Login