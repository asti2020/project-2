import {React, useState} from 'react'

function ProductCard ({itemDetail}){
  const [cardRev, setCardRev] = useState(true)
  const [reviews, setReview] = useState([])

  let Reviewww = itemDetail.reviews;

  const handleCard = () =>{
    setCardRev(!cardRev)
  }

  const handleSubmitReview = (e) =>{
      e.preventDefault();
      fetch (`http://localhost:3000/Inventory/${itemDetail.id}`,{
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          reviews: [...itemDetail.reviews, reviews],
        })
      })

      .then((res) => res.json())
      .then((item) =>console.log(item.reviews))

  } 

  return (
    <div className='cardCard'>
      <main className ="cardContain" onClick={handleCard}>
      { cardRev ? 
        (<div>
            <img className='cardImage' src ={itemDetail.image} alt="this is"/>
            <h3>{itemDetail.name}</h3>
            <h4>{itemDetail.detail}</h4>
            <p>${itemDetail.price}/day</p>
            <button> Cart </button>
            {/* <p>Get a sale alert!  <DiGrails/></p> */}
          </div>)
         : 
        (<div>
          <h4>{itemDetail.detail}</h4>
          <hr/>
          <ul> {Reviewww.map((review, index) =>{
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
      </main>
    </div>
  )
}

export default ProductCard;