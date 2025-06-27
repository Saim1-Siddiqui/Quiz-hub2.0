import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login-container'>
      <hr/>
      <div className='inputpro'>
         <input type='text' name='username' placeholder='Username'></input>
         <input type='password' name='password' placeholder='password'></input>
      </div>
    </div>
  )
}

export default Login