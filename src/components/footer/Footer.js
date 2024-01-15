import React from 'react'
import app from "../../assets/download (2).png"
import { FaTelegram, FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className=' footer'>
      <div className="container footer__continer">

      <div className=" footer__card">
        <p>Biz haqimizda</p>
        <p>Topshirish punktlari</p>
        <p>Vakansiyalar</p>
      </div>
      <div className="footer__card">
        <p>Foydalanuvchlarga</p>
        <p>Biz blan bog'lanish</p>
        <p>Savol-javob</p>
      </div>
      <div className="footer__card">
        <p>Tadbirkorlarga</p>
        <p>Uzumda soting</p>
        <p>Sotuvchilar kabineti</p>
      </div>
      <div className="footer__img footer__card">
        <h3>Ilovani yuklab olish</h3>
      <img src={app} alt="" />
      <h3>Uzum ijtimoiy tarmoqlarda</h3>
      <div className="footer__icon">
        <FaFacebook/>
        <FaGoogle/>
        <FaInstagram/>
        <FaTelegram/>
      </div>
      </div>
      </div>
        <hr className='container' />
        <div className="container footer__bottom">
<p>Maxfiylik kelishuvi
Foydalanuvchi kelishuvi</p>
<p>«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
        </div>
    </div>
  )
}

export default Footer