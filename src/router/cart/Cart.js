import React from 'react'
import {  useSelector,  } from 'react-redux'
import CartProduct from '../../components/cartproduct/CartProduct'
import EmpotyC from "../EmpotyC/EmpotyC"

function Cart() {
  const cart = useSelector(s => s.cart.value)
  return (
<div className="container">
  {
  cart.length ? <CartProduct data={cart}/> : <EmpotyC/>
}

</div>
  )
}


export default Cart