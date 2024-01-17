import React from 'react'
import "./Products.css"
import { IoHeartOutline, IoHeart, IoCartOutline } from "react-icons/io5";
import  {Link} from "react-router-dom"
import { addToWishes, removeFromWishes } from '../../context/wishesSlice';
import {  useDispatch, useSelector } from 'react-redux';

function Products({title, data}) {
 const dispatch = useDispatch()
 const wishes = useSelector((s)=> s.wishes.value)
 console.log(wishes);
  return (
    <div className='container'>
        <div className="products">
        <h2>{title}</h2>
        <div className="products__wrapper">

{
    data?.map((el)=> <div key={el.id} className="products__card">
        <div className="products__image">
<Link to={`/products/ ${el.id}`}>
        <img src={el.url[0]} alt="" />

</Link>
        </div>
        <p className='products__title'>{el.title}</p>
        <mark className='product__monthly'>1500 so'm/oyiga</mark>
        <br />
        <br />
        <del className='product__old-price'>1500 so'm</del>
        <b className='product__price'>{el.price?.brm()} so'm</b>
          {wishes?.some((liked) => liked.id === el.id) ? (
  
  <div 
  onClick={()=> dispatch(removeFromWishes(el))} className="product__heart">
          <IoHeart/>
        </div>
          ) : (
            <div onClick={()=> dispatch(addToWishes(el))} className="product__heart">
            <IoHeartOutline/>
          </div>
          )

          }
        <div className="product__cart">
          <IoCartOutline/>
        </div>
    </div>
    
    )
}
        </div>
        </div>
    </div>
  )
}

export default Products 