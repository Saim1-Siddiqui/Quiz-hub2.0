import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'

function Login() {
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
       const navigate = useNavigate();
       const handlelogin = (e) =>{
        e.preventDefault
          const correctEmail = 'tahafaiz@gmail.com';
          const correctpassword = '1234'
            if(email === correctEmail && password === correctpassword){
              navigate('/Dashboard')
            }else{
              alert("incorrect Email or Password")
            }
       }
           return (
    
   
    <div className='login-container'>
    <hr/>
      <form onSubmit={handlelogin}>
      <div className='login-div'>
      <h1>
              Login into Quiz-hub
          </h1>
         
      <div className='inputpro'>
           <h3 className='email'>Email</h3>
         <input type='Email' name='Email' placeholder='Enter your Email' className='input-1'  onChange={(e) => setemail(e.target.value)}
          required></input>
           <div className="input22">
           <h3 className='password'>Password</h3>
         <input type='password' name='password' placeholder='password' className='input-2' onChange={(e) => setpassword(e.target.value)}
          required></input>
         </div>
      </div>
      </div>
      <p>
        <Link to="/forgot-password" className='forget'>Forgot Password?</Link>
      </p>
        <button className='btn-login'> Login</button>
        <p className='signup-p'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </form>
    </div>
    
  )
}

export default Login