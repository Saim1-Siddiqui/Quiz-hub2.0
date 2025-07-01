import React from 'react';
import './Forget.css'; 
import { MdAttachEmail } from "react-icons/md";

function Forget() {
  return (
    <div className="container-forget">
      <div className="input-forget">
        <h1>Reset your password</h1>
        
             
        <label className='label-email'> Email  <  MdAttachEmail className='email-icon' /></label>
        <input type="email" name="email" placeholder="Enter your email" />

        <label className='label-password'>New Password</label>
        <input type="password" name="new-password" placeholder="Enter new password" />

        <label className='label-confirm'>Confirm Password</label>
        <input type="password" name="confirm-password" placeholder="Confirm new password" />

        <button className='reset-btn' type="submit">Reset Password</button>
        </div>
        
      
    </div>
  );
}
 export default Forget;

