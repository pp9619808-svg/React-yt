import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {

    let navigate= useNavigate()
  return (
    <div className='py-3 px-5 bg-cyan-600'>
      <button
       onClick={()=>{
      navigate('/')
      }}
      className='font-medium bg-cyan-700 py-2 px-5 rounded m-2 cursor-pointer active:scale-95'>
        Return to Home Page
        </button>
    
    <button 
    onClick={()=>{
   navigate(-1)
    }} 
    className='font-medium bg-cyan-700 py-2 px-5 rounded m-2 cursor-pointer active:scale-95'>
      back
      </button>
       <button 
    onClick={()=>{
   navigate(+1)
    }} 
    className='font-medium bg-cyan-700 py-2 px-5 rounded m-2 cursor-pointer active:scale-95'>
      Next
      </button>
    </div>
  )
}

export default Navbar2
