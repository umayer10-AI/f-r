import React from 'react'

const User = ({user,age}) => {
  return (
    <div style={{color: "white"}}>{user}, {age}</div>
  )
}

export default User