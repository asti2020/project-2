import CardContainer from './Components/CardContainer.js'
import { Search } from "./Components/Search.js"
import { React, useEffect, useState} from 'react'


function Home (){
  const[search, setSearch] = useState('')
  const [details, setDetails] = useState([])
  useEffect (() =>{
    fetch("http://localhost:3000/Inventory")
    .then((res) => res.json())
    .then((data)=> {
       console.log(setDetails);
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
// const homeProductFilter = details.filter((item) => { 
//   if(item.type === "new"){
//     return (item.type)
//    }} )
// 
// console.log(homeProductFilter)

// console.log(homeProductFilter, "help")
// return(
//   (item.type)
//   && (item.price)
// )} )


return (
  <div className='bodyHomeContainer'>
       <Search setSearch={setSearch}></Search>
       <CardContainer className={"profilecard"} details={searchFilter}></CardContainer>      
  </div>
)
}

export default Home