import {React, useState} from 'react'
import {DiGrails} from "react-icons/di";


function ProductCard ({detail}){
  const [cardRev, setCardRev] = useState(true)
  const [reviews, setReview] = useState([])

  let reviewww = detail.reviews;

  const handleCard = () =>{
    setCardRev(false)
  }

  const handleSubmitReview = (e) =>{
      e.preventDefault();
      fetch (`http://localhost:3000/Inventory/${detail.id}`,{
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          reviews: [...detail.reviews, reviews],
        })
      })

      .then((res) => res.json())
      .then((item) =>console.log(item.reviews))
      
  }

  return (
    <div className='cardCard'>
      <card className ="cardContain" onClick={handleCard}>
      { cardRev ? 
        (<div>
            <img className='cardImage' src ={detail.image} alt="this is"/>
            <h4>{detail.detail}</h4>
            <p>${detail.price}/day</p>
            <button> Cart </button>
            <p>Get a sale alert!  <DiGrails/></p>
          </div>)
         : 
        (<div>
          <h4>{detail.detail}</h4>
          <hr/>
          <ul> {reviewww.map((review, index) =>{
            if(review){

            }
          return(<li key={index}>{review}</li>)
        })}
          </ul>
          <form onSubmit={handleSubmitReview}>
              <input className="ReviewCart"
                      value={reviews}
                      type= "text"
                      name="review"
                      placeholder="add your review here ...."
                      onChange={(e) => setReview(e.target.value)}
              />
              <input type="submit" placeholder='submit'/>
          </form>
        </div>)
    }

      </card>
    </div>
  )
}

export default ProductCard;