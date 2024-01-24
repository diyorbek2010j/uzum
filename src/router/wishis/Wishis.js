import React from 'react'
import {useSelector} from "react-redux"
import Products from '../../components/Products/Products';
import EmpotyW from '../empotyWishes/EmpotyW';
function Wishis() {
  const wishes = useSelector(state => state.wishes.value)
  console.log(wishes);
  return (
    <div>
      <Products data={wishes}  />
      
            
              
{
  wishes.length ? <Products data={wishes}/> : <EmpotyW/>
}
            
      
    </div>
  )
}

export default Wishis