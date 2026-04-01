import React from 'react'
import Navbar  from './assets/component/Navbar'
import Card from './assets/component/Card'
const user='niharika'
const App = () => {
  return (
    <div>
      <Navbar />
      <Card/> 
      <h1>Welcome, {user}!</h1>
    </div>
  )
}

export default App
