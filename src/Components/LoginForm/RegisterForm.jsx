import React from 'react'
import '../Styles/RegisterForm.css';
import { FaUser, FaLock, FaPhone, FaFile   } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const RegisterForm = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Sign Up</h1>

        <div className='input-box'>
          <FaUser className='icon' />
          <input type='text' placeholder='Full Name' required />
        </div>

        <div className='input-box'>
          <MdEmail className='icon' />
          <input type='email' placeholder='Email' required />
        </div>

        <div className='input-box'>
          <FaPhone  className='icon' />
          <input type='text' placeholder='Phone Number' required />
        </div>

        <div className='input-box'>
          <IoLocationSharp className='icon' />
          <input type='text' placeholder='Address' required />
        </div>

        <div className='input-box'>
          <IoLocationSharp className='icon' />
          <input type='text' placeholder='Location' required />
        </div>

        <div className='input-box'>
          <FaFile  className='icon' />
          <input type='file' placeholder='Your Image' required />
        </div>

        <div className='input-box'>
          <FaLock className='icon' />
          <input type='password' placeholder='Password' required />
        </div>

        <div className='remember-forgot'>
          <label>
            <input type='radio' /> Male &nbsp;&nbsp; &nbsp;&nbsp;
            <input type='radio' /> Female
          </label>
        </div>

        <button type='submit'>Register</button>

        {/* <div className='register-link'>
          <p>
            Don't have an account? <a href='#'>Register</a>
          </p>
        </div> */}
      </form>
    </div>
  )
}

export default RegisterForm
