import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import Admin from './Admin';


function App() {

  return (
    <div className="App">
      <div className="container">
      <nav className="navBar">
          <Link className="navTog" to="/">Home</Link>
          <Link className="navTog" to="/CardContainer">Product</Link>
          <Link className="navTog" to="/admin">Admin</Link>
      </nav>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/admin" element={<Admin />}/>

      </Routes> 
      </div> 
    </div>
  )
}
 
export default App;
