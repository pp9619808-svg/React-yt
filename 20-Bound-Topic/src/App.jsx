import React from 'react'
import Navbar from './assets/componenet/Navbar'
const App = () => {
  const [theme, setTheme] = React.useState('light')

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
