
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

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Admin from './router/admin/Admin';
import Auth from './router/auth/Auth';


function App() {
  return (
    <div className="App">
      <NavbarContiner/>
<Routes>
<Route path='/' element={<Home data={PRODUCTS}/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/wishis' element={<Wishis/>}/>
< Route path='/cart' element={<Cart/>}/>
<Route path='/' element={<Auth/>}>
< Route path='/admin/*' element={<Admin/>}/>
</Route>
< Route path='/products/:id' element={<Singlerote/>}/>
< Route path='/*' element={<Notfound/>}/>

</Routes>
<FooterContiner/>
<ToastContainer/>
    </div>
  );
}

export default App;
