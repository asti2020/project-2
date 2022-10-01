import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <div className="App">
      <nav className="navBar">
          <Link className="navTog" to="/">Home</Link>
          <Link className="navTog" to="/hot">Hot</Link>
          <Link className="navTog" to="/blog">Blog</Link>
      </nav>
      <Routes> 
              <Route path="/" element={<Home/>}/>
      </Routes>   
    </div>
  )
}
 

export default App;
