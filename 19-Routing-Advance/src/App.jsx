import React from 'react'
import Navbar  from './component/Navbar'
import Footar from './component/Footer'
import Home from './assets/page/Home'
import About from './assets/page/About'
import Product from './assets/page/Product'
import Woman from './assets/page/Woman'
import Man from './assets/page/Man'
import { Route, Router, Routes } from 'react-router-dom'
import NotFound from './assets/page/NotFound'
import Courses from './assets/page/Courses'
import CoursesDatil from './assets/page/CoursesDatil'
import Navbar2 from './component/Navbar2'
const App = () => {
  return (
    <div className='h-screen bg-black  text-white'>
    <Navbar/>
    <Navbar2/>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
               <Route path="/courses" element={<Courses />} />
               <Route path='/courses/:coursesId' element={<CoursesDatil/>}/>
              <Route path="/product" element={<Product />} >

              <Route path="man" element={<Man/>}/>
              <Route path="woman" element={<Woman/>}/>
              </Route>

              <Route path="*" element={<NotFound/>}/>
            </Routes>
    <Footar/>
    </div>
  )
}

export default App
