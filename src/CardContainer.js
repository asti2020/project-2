import React from 'react'
import Card from "./Card.js"

function CardContainer ({details}) {
  return (
    <div> 
        <ul className='cardContainer'>
            { details.map((detail) =>{
               return (
                  < Card id={detail.id} detail={detail}/>
               )
            })
             }
          
        </ul>
     </div>
  )
}

export default CardContainer;
