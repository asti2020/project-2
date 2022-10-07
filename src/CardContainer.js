import{ React } from "react";
import ProductCard from "./ProductCard.js"

function CardContainer ({details, onReview , newCart, something}) {
   console.log(something)
   return (
     <div> 
         <ul className='cardContainer'>
            { details.map((detail) =>{
                return (
                  <ProductCard key={detail.id} newCart={newCart} onReview={onReview } detail={detail}/>
                )
             })
            }
          </ul>
      </div>
   )
 }
 export default CardContainer;