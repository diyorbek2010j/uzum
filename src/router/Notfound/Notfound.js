import React from 'react'
import "./Notfound.css"
import p from "../../assets/penguin.a739ac8.png"
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <div className='notfound'>
      <img src={p} alt="" /> 
      <p>Bunday saxifa mavjud emas</p> 
        <Link to={"/"}>
      <button className='notfound__btn'>Ortga qaytish</button>
        </Link>
    </div>
  )
}

export default Notfound