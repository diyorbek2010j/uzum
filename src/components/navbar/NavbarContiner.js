import React from 'react'
import "./NavbarContiner.css"
import SubHeader from './SubHeader'
import Navbar from "./Navbar"
import Navbarbottom from "./Navbarbottom"
import { useLocation } from 'react-router-dom'

function NavbarContiner() {
  const {pathname} = useLocation()
  if(pathname.includes("login") || pathname.includes("admin")){
    return <></>
  }
  return (
    <div>
        <SubHeader/>
        <Navbar/>
        <Navbarbottom/>
    </div>
  )
}

export default NavbarContiner