import React from 'react'

const RightCardCantente = (props) => {

  return (
     <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col 
   justify-between'>
<h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
   
   <div >
   <p className=' text-shadow-2xs text-lg leading-normal text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iure dolor perferendis quo animi, inventore architecto eos n</p>
  
   <div className=' flex justify-between'>
    <button style={{backgroundColor: props.color} }className=' text-white font-medium py-3 px-8 rounded-full'>{props.tag}</button>
    <button style={{backgroundColor: props.color} }className=' text-white font-medium py-3 px-4 rounded-full'><i className='ri-arrow-right-line'></i></button>
   </div>
    </div>
    </div> 
  )
}

export default RightCardCantente
