import {React, useEffect, useState} from 'react'
import CardContainer from './CardContainer'





function Profile () {

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

  // const[filtredProduct, steFiltredProduct] = useState([])

  const[all, setAll] = useState([])
  const[color, setColor] = useState([])
  const[brand, setBrand] = useState([])
  const[review, setReview] = useState([])
  const[price, setPrice] = useState([])

  const handleCategoryChange =(e) =>{
    setDetails( e.target.value); 
 }

// const filteredProducts = details.filter(detail => detail.type === "new")
const brandHandletog = () =>{
  const filteredProducts = details.filter(detail => detail.type === "new")
  setBrand(filteredProducts)
}
console.log(brandHandletog)

  return (

    <>

<h3>Product</h3>
    <hr></hr>
      <div>{<CardContainer details={details}/>}</div>
      <hr></hr>
      <div>
      <div className="dropdown">
            <span>filter By category</span>
            <div className="dropdown-content">
        <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
        >
         <option value={all}>All</option>
         <option value={color}>color</option>
         <option onClick={brandHandletog} value={brand}>brand</option>
         <option value={review}>reviews</option>
         <option value={price}>{price ? "up" : "down"}</option>
      </select>
            </div>
            </div>
      </div>
    </>




  )

}




export default Profile