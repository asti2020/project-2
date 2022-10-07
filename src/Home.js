import React, { useEffect, useState} from 'react'
import CardContainer from './Components/CardContainer.js'
import { Search } from "./Components/Search.js"
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
// import image1 from './images/image1.jpeg'


function Home (){
  const[search, setSearch] = useState('')
  const [details, setDetails] = useState([])
  useEffect (() =>{
    fetch("http://localhost:3000/Inventory")
    .then((res) => res.json())
    .then((details)=> {
        setDetails(details)
    })  
    .catch((err) => {
        console.log("404 page returned")
    })


},[])

console.log(setDetails)
const searchFilter = details.filter((item) =>{
  return (item.name.toLowerCase().includes(search.toLowerCase()) ||
  item.detail.toLowerCase().includes(search.toLowerCase()) 
  )
})

// const homeProductFilter = details.filter((item) => { 
//   if(item.type === "new"){
//     return (item.type)
//    }} )
// 
// console.log(homeProductFilter, "help")


  return (
    <>
    <div className='bodyHomeContainer'>
      <h4 className="homePageTitle">designer bags: without the commitment... 
      <br/>or the price tag</h4>
      {/* <h1> designer- without the commitment or the price tag</h1> */}
      <Search setSearch={setSearch} />
      </div>
      <div>
      <CardContainer className={"profilecard"} details={searchFilter} /> 
    
    </div>

    </>
  )
}

export default Home;
