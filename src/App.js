import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import Admin from './Admin';
import logo from './images/logooo.png'


function App() {

  return (
    <div className="App">
      <nav className="navBar"> <img src={logo} alt="logo"/>
        <div className="links-container">
          <Link className="navTog" to="/">Home</Link>
          <Link className="navTog" to="/hot">Hot</Link>
          <Link className="navTog" to="/admin">Admin</Link>
        </div>
      </nav>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/admin" element={<Admin />}/>
      </Routes>  
    </div>
  )
}
 
export default App;
