import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4  text-black'>
     <h2 className='text-4xl font-extrabold'>TravelGo</h2> 
     <div className='flex gap-8 text-xl'>
        <Link className='text-lg font-bold' to='/'>Home</Link>
        <Link className='text-lg font-bold' to='/about'>About</Link>
        
        <Link className='text-lg font-bold' to='/contact'>Contact</Link>
        <Link className='text-lg font-bold' to='/services'>Services</Link>
        <Link to="/">
                  <button className="px-1 py2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ">
                    Loging
                  </button>
                </Link>
            
           <button className="bg-blue-600   text-white px-1 rounded-lg hover:bg-blue-700">
          Book Now
        </button>
     </div>
    </div>
  )
}

export default Navbar
