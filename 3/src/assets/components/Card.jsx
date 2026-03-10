import React from 'react'

const Card = ({user,age,img}) => {

  return (
    <div className="card">
        <img src={img} alt="" />
        <h1>{user},{age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <button>View profile</button>
      </div>
  )
}

export default Card;