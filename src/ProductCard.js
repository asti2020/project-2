import {React, useState} from 'react'
import { BsEmojiHeartEyes } from 'react-icons/bs'

function ProductCard ({detail, onReview, newCart }){
  const [cardRev, setCardRev] = useState(true)
  const [reviews, setReview] = useState([])
  const[react, setReact] = useState(true)

  const onClickCard= () =>{
    setReact(!react)
  }
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
      .then((item) => {
        onReview(item.details.reviews)})

    } 

    const[count, setCount] = useState(0)
    const handleCart = () =>{
      setCount(count + 1)
      newCart(detail)
    }

  return (
    <div className='cardCard'>
      <main className ="cardContain" >
        <button className="btn btn-primary" onClick={handleCard} ></button>
      { cardRev ? 
        (<div>
            <img className='cardImage' src ={detail.image} alt="this is"/>
            <h3>{detail.name}</h3>
            <h4 >{detail.detail}</h4>
            <p>${detail.price}/day</p>
            <p>Day: {count}</p>
            <button className="addToCartButton" onClick={handleCart}> Book </button>
            {/* className="reactbtn" */}
            { react ? ( <p  onCLick={onClickCard}><BsEmojiHeartEyes/></p>) : <p className="reactbtn"  onCLick={onClickCard}><BsEmojiHeartEyes/></p> }
          </div>)
         : 
        (<div>
          <h4>{detail.detail}</h4>
          <h6>♥ reviews ♥</h6> 
          <ul> {detail.reviews.map((review, index) =>{
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