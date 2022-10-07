import React from 'react'
import CardContainer from './CardContainer.js'

export const Cart= ({items}) => {

  console.log(items)
  return (
    <div> <CardContainer details={items}/> </div>
  )
}
