import React, {useState} from 'react'
import "./CartProduct.css"
import {FaRegTrashAlt} from 'react-icons/fa'
import { deCart,incCart,removeAllCart,removeCart } from '../../context/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const BOT__TOKEN = "6649486877:AAFIxu1CvrXexdOzygG50rEzaw__rJlTplQ"
const USER_ID =    6516090274
const CHAT_ID =  -1002109312367



//https://api.telegram.org/bot6649486877:AAFIxu1CvrXexdOzygG50rEzaw__rJlTplQ/getUpdates
//https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

function CartProducts({data}) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("") 
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    let text = "Buyurtma  %0A"
    text += `ismi: ${name} %0A `
    text += `tel: ${phoneNumber} %0A`
    text += `manzil: ${address}  %0A`
    text += `habar: ${message} %0A %0A `

data.forEach((item)=>{
  text += `nomi: ${item.title} %0A`
  text += `nomi: ${item.quantity} %0A`
  text += `nomi: ${item.price.brm()} so'm %0A%0A`
  // text += `rasm: ${item.url}%0A`

})
text += `Jami: <b>${data.reduce((a, b)=> a + b.price * b.quantity, 0)?.brm()}</b> so'm`


let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
let api = new XMLHttpRequest();
api.open("GET", url, true);
api.send();
toast.success("Buyurtmangiz qabul qilindi 24 soat ichida aloqaga chiqamiz", {position: "top-center"})
dispatch(removeAllCart())
setName("")
setAddress("")
setPhoneNumber("")
setMessage("")
  }
  return (
    <div className='cart__wrapper'>
      <div className="cart__products">
        {
          data?.map(el => <div key={el.title} className='cart__item'>
            <Link to={`/product/${el.id}`} className='cart__item-left'>
<NavLink to={"/singleroute"}>

              <img src={el.url} alt={el.title} />
</NavLink>
              <div>
                <h4>{el.title}</h4>
                <p>Kategoriya: {el.category}</p>
              </div>
            </Link>   
            <div className="cart__item-right">
              <div className="cart__item-btns">
                <button disabled={el.quantity
                <= 1} onClick={() => dispatch(deCart(el))}>-</button>
                <button>{el.quantity}</button>
                <button onClick={() => dispatch(incCart(el))}>+</button>
              </div>
              <div>
                <button  
                onClick={() => dispatch(removeCart(el))}
                className='cart__trash-btn'><FaRegTrashAlt/> </button>
                <h3>{el.price?.brm()} so'm</h3>
                <p> {(el.price * el.quantity)?.brm()} so'm</p>
              </div>
            </div>
          </div> )
        }
      </div>
      <div className="cart__register">
        <div className="input__reg">
          <h3>Ma'lumotlarni to'ldiring:</h3>
          <form onSubmit={handleSubmit} action="" >
            <input value={name} onChange={(e)=> setName(e.target.value)} required type="text" placeholder="To'liq ismingiz" />
            <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} required type="text" placeholder="+998 00-000-00-00" />
            <input value={address} onChange={(e)=> setAddress(e.target.value)} required type="text" placeholder="Manzilingiz" />
            <input value={message} onChange={(e)=> setMessage(e.target.value)} required type="text" placeholder="Habar yo'llash" />
            <div className="total">
              <p>Umumiy narx:</p>
              <b>{data.reduce((a,b)=> a + b.price * b.quantity, 0)?.brm()} so'm</b>
            </div>
            <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default CartProducts