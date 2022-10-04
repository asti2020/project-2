import {React, useEffect, useState} from 'react'
import CardContainer from './CardContainer'
import {NavProfile} from './NavProfile'

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

  return (
    <>
      <div>{<CardContainer details={details}/>}</div>
      <div>
        < NavProfile/>
      </div>
    </>
    
  )
}

export default Profile
