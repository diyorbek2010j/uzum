import React from 'react'
import "./FooterContiner.css"
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

function FooterContiner() {
  const {pathname} = useLocation()
  if(pathname.includes("login") || pathname.includes("admin")){
    return <></>
  }
  return (
    <div>
      <Footer/>
      </div>
  )
}

export default FooterContiner;