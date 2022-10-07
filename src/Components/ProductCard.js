import React, { useState} from 'react'

function ProductCard ({detail}){
  const [cardRev, setCardRev] = useState(true)
  const [reviews, setReview] = useState([])
  const handleCard = () =>{
  
    setCardRev(!cardRev)
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
      <main>
      { cardRev ? 
        (<div onClick={handleCard}>
            <img className='cardImage' src ={detail.image} alt="this is"/>
            <h3>{detail.name}</h3>
            <h4>{detail.detail}</h4>
            <p>${detail.price}/day</p>
            <button className="addToCartButton"> rent! </button>
            {/* <p>Get a sale alert!  <DiGrails/></p> */}
          </div>)
         : 
        (<div className='backCard'>
        <div>
          <h4 onClick={handleCard}>{detail.name} <br/> {detail.detail}</h4>
          <h6>♥ reviews ♥</h6> </div>
          <hr/>
          <ul> {detail.reviews.map((review, index) =>{
          
            return(<li key={index}>{review}</li>)
        })}
          </ul>
          <form onSubmit={handleSubmitReview}>
              <input className="ReviewCart"
                      value={reviews}
                      type= "text"
                      name="review"
                      placeholder="let us know how much you loved this bag... ♥"
                      onChange={(e) => setReview(e.target.value)}
              />
              <input type="submit" placeholder='submit' className="cartSubmit"/>
          </form>
        </div>)
    }
      </main>
    </div>
  )
}

export default ProductCard;