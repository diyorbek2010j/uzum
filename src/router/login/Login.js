import React from 'react'
import "./Login.css"
import { NavLink  } from 'react-router-dom'
import { FaTelegram, FaGoogle, FaFacebook } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

function Login() {
  return (
    <div className='login'>
<div className="logn__card">
  <h1 className='login__title'>Royxatdan o'tish</h1>
  <div className="login__card-input">
    <input type="text" placeholder='Username...' />
    <input type="password" placeholder='Password...' />
<input type="text" placeholder='Age...' />

  </div>
  <button className='login__card-btn'>Kirish</button>
<NavLink to={"/"} >
  <h2 className='login-home login__title'>Bosh sahifa</h2>
</NavLink>
<div className="login__icons">
  <FaFacebook/>
  <FaGoogle/>
  <FaTelegram/>
<CiCircleMore className='i' />

</div>
</div>
    </div>
  )
}

export default Login