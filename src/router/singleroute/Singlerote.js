import React from 'react'
import "./Singlerote.css"
import { PRODUCTS } from '../../static/Index'
import { useParams } from 'react-router-dom'
import { incCart } from '../../context/cartSlice';
import { useDispatch } from 'react-redux';
import {toast} from "react-toastify"
import { Link } from 'react-router-dom';
import wishesSlice from '../../context/wishesSlice';
function Singlerote() {
    const params = useParams()
    const dispatch = useDispatch()
    const oneItem = PRODUCTS.find((el)=> el.id === params.id)
 console.log(oneItem);
 const handleAddCart = (el)=>{
  dispatch(incCart(el))
  toast.success("Savatga qo'shildi", {position: "top-center"})

}
  return (
    <div className='container'>
        <div className="single__route">
        <div className='single__img'><img  src={oneItem?.url[0]} width={350} alt="" /></div>
        <div className='single__title'>
            <h2 className='single__name'>{oneItem?.title}</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis, ipsam incidunt cupiditate praesentium neque quasi voluptas doloremque ea sapiente officiis ducimus, reiciendis fuga! Natus eligendi, impedit expedita voluptas quo quibusdam rerum beatae quidem porro perspiciatis ut laborum earum illum illo amet deleniti! Corporis sunt possimus iure, quos commodi fugit.</p>
            <h2 className='single__price'>{oneItem?.price.brm()} so'm</h2>
            <br />
            <mark className='single__monthly'>{(oneItem.price * 1.5 / 12)?.brm()} so'm</mark>
<div className="single__button">
  <button onClick={()=> handleAddCart(oneItem)} className='single__btn'>Savatga qoshish</button>
  <Link to={"/"}>
  <button className='single__btn single__admin'>Bosh sahifa</button>
  </Link>

</div>
        </div>

        </div>
        
        
    </div>
  )
}

export default Singlerote