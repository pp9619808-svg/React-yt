import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Contac from './assets/pages/Contac'
import Product from './assets/pages/Product'
import Navbar from './comomnent/Navbar.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contac />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
