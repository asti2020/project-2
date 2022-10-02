import {React, useState} from 'react'


function Card ({detail}){
  const [cardRev, setCardRev] = useState(true)

  const handleCard = () =>{
    setCardRev(!cardRev)
  }

  return (
    <div className='cardCard'>
      <card className ="cardContain" onClick={handleCard}>
      { cardRev ? 
        (<div>
            <img className='cardImage' src ={detail.image} alt="this is"/>
            <h4>{detail.detail}</h4>
            <p>${detail.price}</p>
            <p>Get a sale alert!</p>
          </div>)
         : 
        (<div>
          <h4>{detail.detail}</h4>
          <p>{detail.reviews}</p>
        </div>)
    }

      </card>
    </div>
  )
}

export default Card;
