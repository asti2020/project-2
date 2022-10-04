import { React, useEffect, useState} from 'react'
import CardContainer from './CardContainer.js'
import { Search } from "./Search.js"

function Home (){
    const [details, setDetails] = useState([])
    const[search, setSearch] = useState('')
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

      const searchFilter = details.filter((item) =>{
        return (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.detail.toLowerCase().includes(search.toLowerCase()) 
        )
      })


  return (
    
    <div>
    
         <Search setSearch={setSearch}></Search>
         <CardContainer details={searchFilter}></CardContainer>
           
    </div>
  )

}


export default Home
