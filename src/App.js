import './App.css';
import { React, useEffect, useState } from 'react'
import { Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import Admin from './Admin';
import CardContainer from './CardContainer';
import Profile from './Profile';




function App() {
  
  

  return (
    <div className="App">
      <div className="container">
      <nav className="navBar">
          <Link className="navTog" to="/">Home</Link>
          <Link className="navTog" to="/product" >Product</Link>
          <Link className="navTog" to="/admin">Admin</Link>
      </nav>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<Profile />}/>     
            <Route path="/admin" element={<Admin />}/>

      </Routes> 
      </div> 
    </div>
  )
}
 
export default App;
