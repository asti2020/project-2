import React from 'react'
import ProductCard from "./ProductCard.js"

function CardContainer ({details}) {

   return (
     <div> 
         <ul className='cardContainer'>
             { details.map((detail) =>{
                return (
                   <ProductCard id={detail.id}  detail={detail}/>
                )
             })
              }
          </ul>
      </div>
   )
 }
 export default CardContainer;