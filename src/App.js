
import './App.css';
import NavbarContiner from './components/navbar/NavbarContiner';
import { Routes, Route } from 'react-router-dom';
import Home from './router/home/Home';
import Login from './router/login/Login';
import Wishis from './router/wishis/Wishis';
import Cart from './router/cart/Cart';
import { PRODUCTS } from './static/Index';
import FooterContiner from './components/footer/FooterContiner';
import Singlerote from './router/singleroute/Singlerote';
import Notfound from './router/Notfound/Notfound';
function App() {
  return (
    <div className="App">
      <NavbarContiner/>
<Routes>
<Route path='/' element={<Home data={PRODUCTS}/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/wishis' element={<Wishis/>}/>
< Route path='/cart' element={<Cart/>}/>
< Route path='/products/:id' element={<Singlerote/>}/>
< Route path='/*' element={<Notfound/>}/>

</Routes>
{/* <FooterContiner/> */}
    </div>
  );
}

export default App;
