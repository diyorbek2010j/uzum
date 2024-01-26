import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function Auth() {
let user = null
return user ? <Outlet/> : <Navigate  replace to={"/login"} />
}

export default Auth