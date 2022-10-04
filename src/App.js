import './App.css';
import { React, useEffect, useState} from 'react'
import { Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import Admin from './Admin';
import CardContainer from './CardContainer';

// import CardContainer from './CardContainer';


function App() {
  const [details, setDetails] = useState([])

  useEffect (() =>{
    fetch("http://localhost:3000/Inventory")
    .then((res) => res.json())
    .then((data)=> {
        setDetails(data);
    })  
    .catch((err) => {
        console.log("404 page returned")
    })


},[])

  return (
    <div className="App">
      <div className="container">
      <nav className="navBar">
          <Link className="navTog" to="/">Home</Link>
          <Link className="navTog" to="/product">Product</Link>
          <Link className="navTog" to="/admin">Admin</Link>
      </nav>
      <Routes>
            <Route path="/" element={<Home details={details}/>}/>
            <Route path="/product" element={<CardContainer details={details} />}/>     
            <Route path="/admin" element={<Admin />}/>

      </Routes> 
      </div> 
    </div>
  )
}
 
export default App;
