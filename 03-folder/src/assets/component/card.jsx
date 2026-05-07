import React from 'react'

const card = (props) => {
    console.log(props)
  return (
    <div>
     <div className="card">
      <img src={props.img} alt="card image"/>
      <h1>{props.user}</h1>
      <p>{props.words}</p>
      <button>Click Me</button>
    </div>
    </div>

  )
}

export default card
