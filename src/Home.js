import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { React, useState, useEffect} from 'react'
import CardContainer from './CardContainer.js'
import { Search } from "./Search.js"


function Home (){
    const[search, setSearch] = useState('')
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

    console.log(details)
      const searchFilter = details.filter((item) =>{
        return (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.detail.toLowerCase().includes(search.toLowerCase()) 
        )
      })
      const homeProductFilter = details.filter((item) =>{
        if(item.type === "new"){
          return (item.type)
         }} )
      
console.log(homeProductFilter)
  return (
    <div className='bodyHomeContainer'>
         <Search setSearch={setSearch}></Search>
         <CardContainer className={"profilecard"} details={searchFilter}></CardContainer>      
    </div>
  )

}


export default Home
