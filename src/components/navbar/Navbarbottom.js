import React from 'react'
import "./NavbarContiner.css"

const ITEMS = [
  "Elektironika",
  "Aksesuarlar",
  "Kiyimlar",
  "Maishiy texnika",
  "Poyabzallzr",
  "Gozalik va pardozlash",
  "Salomatlik",
  "Uy- rozg'oga buyumlar",
  "Qurilish va tamirlash",
  "Avto tovarlar"

]


function Navbarbottom() {
  return (
<div className='container'>
      <div className="navbar__bottom">
        {
          ITEMS?.map((el, inx)=> <div className='navbar__bottom-item' key={inx}>
            <p>{el}</p>
          </div>)
        }
      </div>
    </div>
  )
}

export default Navbarbottom