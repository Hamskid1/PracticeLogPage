// LoginForm.js
import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';

function LoginPage({ onToggleForm }) {
  return (
    <div>
      <h1>Login</h1>
      <form action="#">
        <div className='input-type'>
          <FaUser className='i' />
          <input type="text" placeholder='Username' className='input' />
        </div>
        <div className='input-pass'>
          <FaLock className='i2' />
          <input type="password" placeholder='Password' className='input' />
        </div>
        <div className="remember-forget">
          <label><input type="checkbox" /> Remember</label>
          <a href="#">Forget Password</a>
        </div>
        <button type="submit" className='login-btn'>Login</button>
      </form>

      <div className="register-link">
        <p>Don't have an account? <a href="#" onClick={onToggleForm}>Register</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
