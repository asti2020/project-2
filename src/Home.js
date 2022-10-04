import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { React, useState} from 'react'
import CardContainer from './CardContainer.js'
import { Search } from "./Search.js"

function Home ({details}){
    const[search, setSearch] = useState('')

    console.log(details)
      const searchFilter = details.filter((item) =>{
        return (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.detail.toLowerCase().includes(search.toLowerCase()) 
        )
      })

  return (
    <div className='bodyHomeContainer'>
         <Search setSearch={setSearch}></Search>
         <CardContainer className={"profilecard"} details={searchFilter}></CardContainer>      
    </div>
  )

}


export default Home
