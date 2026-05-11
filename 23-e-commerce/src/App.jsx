import React from 'react'
import Nabvar from './assets/component/Navbar'
import { Route, Router } from 'react-router-dom'
import Home  from './assets/page/Home'
import About from './assets/page/About'
import Contact from './assets/page/Contact'
import Services from './assets/page/Services'
import NotFound from './assets/page/NotFound'
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
