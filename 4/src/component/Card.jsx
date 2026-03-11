import React from 'react'

const Card = ({logo,company,datePosted,post,tag1,tag2,pay,location}) => {
  return (
    <div className="card">
            <div className="top">
              <div><img src="https://images.unsplash.com/photo-1772551761752-bc870c2e5be5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
              <p>save</p>
            </div>
            <div className="center">
              <h3>{company} <span>{datePosted}</span></h3>
              <h2>{post}</h2>
              <div>
                  <h2>{tag1}</h2>
                  <h2>{tag2}</h2>
              </div>
            </div>
            <div className="bottom">
              <div>
                <h3>{pay}</h3>
                <p>{location}</p>
              </div>
              <button>Apply Now</button>
            </div>
        </div>
  )
}

export default Card