
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

      const [selectedType, setSelectedType] = useState("")

      const handleCategoryChange =(e) =>{
        setSelectedType(e.target.value); 
     }
     
    const filteredProductsNew = details.filter((item) =>{
      if (selectedType === ""){
        return true;
      }
      return((item.type === selectedType))
    })
      

  

  return (
    <>
    <hr></hr>
    <h3>Product</h3>
    <div className="dropdown">
            <span>filter By category</span>
            <div className="dropdown-content">
        <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
        >
              <option value="new">new</option>
              <option value="old">old</option>
      </select>
      </div>
    <hr></hr>
      <div>{<CardContainer details={filteredProductsNew}/>}</div>

      </div>
    </>
    
  )
}

export default Profile
