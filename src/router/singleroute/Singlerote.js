import React from 'react'
import { PRODUCTS } from '../../static/Index'
import { useParams } from 'react-router-dom'

function Singlerote() {
    const params = useParams()
    const oneItem = PRODUCTS.find((el)=> el.id === params.id)
 console.log(oneItem);
  return (
    <div className='container'>
        <div className="single__route">
        <div><img className='single__img' src={oneItem?.url[0]} width={350} alt="" /></div>
        <div>
            <h2>{oneItem?.title}</h2>
            <p className='single__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis, ipsam incidunt cupiditate praesentium neque quasi voluptas doloremque ea sapiente officiis ducimus, reiciendis fuga! Natus eligendi, impedit expedita voluptas quo quibusdam rerum beatae quidem porro perspiciatis ut laborum earum illum illo amet deleniti! Corporis sunt possimus iure, quos commodi fugit.</p>
            <h2>{oneItem?.price}</h2>
         
        </div>

        </div>
        
        
    </div>
  )
}

export default Singlerote