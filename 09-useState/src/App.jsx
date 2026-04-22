import React from 'react'

const App = () => {
const [a, setA] = React.useState(0)
const [b, setB] = React.useState(6)
return (

    <div>
      <h1> value of function {a}</h1>
      <h1> value of function {b}</h1>
    <button onClick={() => setA(a + 1)}>increasing</button>
    <button onClick={() => setA(a- 3)}>discreasing</button>
    </div>
  )
}


export default App

