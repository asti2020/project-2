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

      // const[all, setAll] = useState([])
      // const[color, setColor] = useState([])
      // const[brand, setBrand] = useState([])
      // const[review, setReview] = useState([])
      // const[price, setPrice] = useState([])

      const [selectedType, setSelectedType] = useState("")
      const handleCategoryChange =(e) =>{
        setSelectedType( e.target.value); 
     }
     
    const filteredProductsNew = details.filter((item) =>{
      if (item.type !== ""){
         return (details)
        }
      return(item.type === selectedType)})

  

  return (
    <>
    <h3>Product</h3>
    <hr></hr>
      <div>{<CardContainer details={filteredProductsNew}/>}</div>
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
          {/* <div>{<CardContainer details={details}/>}</div> */}
          <option value="all">all</option>
         <option value="new">new</option>
         <option value="old">old
         {/* {<CardContainer details={filteredProductsNewColor}/>} */}
         </option>
      </select>
            </div>
        </div>
      </div>
    </>
    
  )
}

export default Profile
