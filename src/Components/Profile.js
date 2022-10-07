import React, {useEffect, useState} from 'react'
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
        setSelectedType( e.target.value); 
     }

    const filteredProductsNew = details.filter((item) =>{
      if (selectedType === ""){
         return (true)
        }
      return(item.type === selectedType)})



  return (

    <>
    <h3>ALL PRODUCT</h3>
    
      <div>
      <div className="dropdown">
            <span>filter by </span>
            <div className="dropdown-content">
        <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
        >
          {/* <div>{<CardContainer details={details}/>}</div> */}
          <option value=" ">all</option>
         <option value="new">new</option>
         <option value="old">old
         {/* {<CardContainer details={filteredProductsNewColor}/>} */}
         </option>
      </select>
            </div>
        </div>
        <hr></hr>
      <div>{<CardContainer details={filteredProductsNew}/>}</div>
      <hr></hr>
      </div>
  </>

  )

}



export default Profile