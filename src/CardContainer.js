import React from 'react'
import Card from "./Card.js"
import { Link } from "react-router-dom";


function CardContainer ({details}) {

  return (
    <div> 
        <ul to="/profile" className='cardContainer'>
            { details.map((detail) =>{
               console.log(detail)
               return (
                  <Card id={details.id} detail={detail}/>
               )
            })
             }
         </ul>
     </div>
  )
}

export default CardContainer;
