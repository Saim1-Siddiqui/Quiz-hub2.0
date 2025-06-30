import React from 'react'
import './Signup.css'
import { Input } from 'postcss'

function SignUp() {
  return (
    <div className='container-signup'>
        <h1 className='login-h1'>
             Signup into Quiz-hub 
        </h1>
        <div className="inputall">
            <h1 className='login-email'> Email </h1>
          <input className='input-login1' type='email' name='email' placeholder='Enter UserEmail' onChange={(e)=>setuseremail(e.target.value)} ></input>
            <h1 className='login-username'>
                UserName
            </h1>
          <input className='input-login2'  type='text' name='username' placeholder='Enter Username' onChange={(e) => setusername (e.target.value)} ></input>
            <h1 className='login-password'>
                Password
            </h1>
          <input className='input-login3'  type='password' name='password' placeholder='Password' onChange={(e)=>setuserpassword(e.target.value)}></input>
          </div>
          <div className='labelpro'>
          <label className='label'>
             <input type='checkbox'>
               </input>
               <p>
                  i agree with all sugestions 
               </p>
               <button type='submit'> signup</button>
              
          </label>
          </div>
    </div>
  )
}

export default SignUp