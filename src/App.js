import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import Admin from './Admin';
import logo from './images/logooo.png'
import Profile from './Profile';
 import {Cart} from "./Cart";
import CardContainer from './CardContainer';
import { useState } from 'react';


function App() {

  const [itemsInTheCart, setItemsInTheCart] = useState([])

  const newCart = (itemObj) =>{
      setItemsInTheCart([...itemsInTheCart,itemObj]);
  }

  console.log(itemsInTheCart)
  return (
    <div className="App">
      <nav className="navBar"> <Link src={logo} alt="logo"/>
        <div className="links-container">
         
          <Link className="navTog" to="/">Home</Link>
          <Link className="navTog" to="/product" >Product</Link>
          <Link className="navTog" to="/cart" >Cart</Link>
          <Link className="navTog" to="/admin">Admin</Link>
        </div>
      </nav>
      <Routes>
            <Route path="/" element={<Home newCart={newCart}/>}/>
            <Route path="/product" element={<Profile />}/>     
            <Route path="/admin" element={<Admin />}/>
            <Route path="/cart" element={<Cart items={itemsInTheCart}></Cart>}></Route>
            <Route path="/product" element={<CardContainer />}> </Route>
      </Routes>  
    </div>
  )
}
 
export default App;
