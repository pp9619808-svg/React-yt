import React from 'react'
import Navbar from './assets/component/Navbar'
import Footer from './assets/component/Footer'
import Home from './assets/pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './assets/pages/About'
import NotFound  from './assets/pages/NotFound'
import Contact from './assets/pages/Contact'
import Services from './assets/pages/Services'

const App = () => {
  return (
    <div className='h-screen  text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='*' element={<NotFound/>}/>
  
      </Routes>
    

    </div>
  )
}

export default App
