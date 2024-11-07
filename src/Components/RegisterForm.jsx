// RegisterForm.js
import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';


function RegisterForm({ onToggleForm }) {
  return (
    <div>
      <h1>Register</h1>
      <form action="#">
        <div className='input-type'>
          <FaUser className='i' />
          <input type="text" placeholder='Username' className='input' />
        </div>
        <div className='input-type'>
          <input type="email" placeholder='Email' className='input' />
        </div>
        <div className='input-pass'>
          <FaLock className='i2' />
          <input type="password" placeholder='Password' className='input' />
        </div>
        <button type="submit" className='login-btn'>Register</button>
      </form>

      <div className="register-link">
        <p>Already have an account? <a href="#" onClick={onToggleForm}>Login</a></p>
      </div>
    </div>
  );
}

export default RegisterForm;
