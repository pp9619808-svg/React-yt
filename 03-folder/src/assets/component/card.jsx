import React from 'react'

const card = (props) => {
    console.log(props)
  return (
    <div>
     <div className="card">
      <img src={props.img} alt="card image"/>
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius laborum fugiat ducimus saepe consequuntur, architecto voluptatibus voluptatum placeat excepturi iste harum, doloremque incidunt corporis molestiae, officia accusantium. Voluptas, voluptatem commodi?</p>
      <button>Click Me</button>
    </div>
    </div>

  )
}

export default card
