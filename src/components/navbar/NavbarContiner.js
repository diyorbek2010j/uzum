import React from 'react'
import "./NavbarContiner.css"
import SubHeader from './SubHeader'
import Navbar from "./Navbar"
import Navbarbottom from "./Navbarbottom"
function NavbarContiner() {
  return (
    <div>
        <SubHeader/>
        <Navbar/>
        <Navbarbottom/>
    </div>
  )
}

export default NavbarContiner