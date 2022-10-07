import { React, useEffect, useState} from 'react'
import CardContainer from './CardContainer.js'
import { Footer } from './Footer.js'
import { Search } from "./Search.js"


function Home ({newCart}){
  const[search, setSearch] = useState('')
  const [details, setDetails] = useState([])

  const onReview = (revew) =>{
    setDetails([...details.reviews, revew])
  }

  useEffect (() =>{
      fetch("http://localhost:3000/Inventory")
      .then((res) => res.json())
      .then((data)=> {
        setDetails(data);
      })  
  },[])

console.log(details)
const searchFilter = details.filter((item) =>{
  if(search === ""){
    return (false)
  }
  return (item.name.toLowerCase().includes(search.toLowerCase()) ||
  item.detail.toLowerCase().includes(search.toLowerCase()) 
  )
})



  return (
    <div className='bodyHomeContainer'>
      <h4 className="homePageTitle">designer bags: without the commitment...
      <br/>or the price tag</h4>
      <Search setSearch={setSearch} />
      <div>
        <CardContainer newCart={newCart} className={"profilecard"} onReview={onReview} details={searchFilter}></CardContainer>  
        <Footer />    
    </div>
    </div>
  )
}

export default Home
