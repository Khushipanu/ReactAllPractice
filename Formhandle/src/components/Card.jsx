import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
      <h1>this is a card by {props.username} </h1>
    </div>
  )
}

export default Card
