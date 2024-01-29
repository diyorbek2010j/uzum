import React from 'react'
import "./Admin.css"
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import Statistik from './statistik/Statistik'
import { IoHomeOutline } from "react-icons/io5";

import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
function Admin() {
  const navigate = useNavigate()
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <div onClick={()=>navigate("/")}><IoHomeOutline />
</div>
        <h2>Admin Dashboard</h2>
        <div className="admin__links">
          <NavLink to="create-product">Create Product</NavLink>
          <NavLink to="manage-product">Manage Product</NavLink>
          <NavLink to="statistik">Statistik</NavLink>

        </div>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path='/create-product' element={<CreateProduct/>}/>
          <Route path='/manage-product' element={<ManageProduct/>}/>
          <Route path='/statistik' element={<Statistik/>}/>

        </Routes>
      </div>
    </div>
  )
}

export default Admin