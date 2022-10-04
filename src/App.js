import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import Admin from './Admin';
import logo from './images/logooo.png'
import Profile from './Profile';


function App() {

  return (
    <div className="App">
      <nav className="navBar"> <img src={logo} alt="logo"/>
        <div className="links-container">
          <Link className="navTog" to="/">Home</Link>
          <Link className="navTog" to="/product" >Product</Link>
          <Link className="navTog" to="/admin">Admin</Link>
        </div>
      </nav>
      <Routes>
      <Route path="/" element={<Home />}/>
            <Route path="/product" element={<Profile />}/>     
            <Route path="/admin" element={<Admin />}/>
      </Routes>  
    </div>
  )
}
 
export default App;
