import React from 'react'
import RightCardCantente from './RightCardCantente';

const RightCard = (props) => {

  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative  rounded-4xl'>
       <img  className='h-full w-full object-cover' src={props.img} alt="" />
<RightCardCantente id={props.id} color={props.color} tag={props.tag}/>
    </div>
  )
}

export default RightCard ; 
   