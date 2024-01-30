import React from 'react'
import "./CreateProduct.css"
import "../Admin.css"
function CreateProduct() {
  return (
    <div className='create-product'>
      <h2 >Mahsulot yarating</h2>
      <div className='create-product__input' >
        <input className='input-title' type="text" placeholder='Mahsulot nomi' />
        <input className='input-title' type="naumber" placeholder='Mahsulot narxi' />
        <select name="" id="">
          <option value="">texnnika</option>
          <option value="">oziq-ovqat</option>
          <option value="">kiyim</option>
          <option value="">boshqa maxsulot</option>
        </select>
        <input className='input-file' type="file" />
        <button className='input-btn'>Mahsulot yaratish</button>
      </div>
    </div>
  )
}

export default CreateProduct