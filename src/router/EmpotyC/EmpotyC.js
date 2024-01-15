import React from 'react'
import "./Emporty.css"
import { Link } from 'react-router-dom'
import c from "../../assets/cart.png"
function EmpotyC() {
  return (
    <div className='container EmpotryC'>
<img src={c} alt="" />
<h2>Savatda hozircha mahsulot yoʻq</h2>
<p>Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping</p>
<Link to={"/"}>
<button>Bosh sahifa</button>
</Link>
    </div>
  )
}

export default EmpotyC