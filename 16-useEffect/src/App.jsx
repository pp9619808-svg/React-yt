import React, { useEffect } from 'react'
import{useState }from 'react';
const App = () => {
  const [a, setA] = React.useState(0);
const[b, setB] = React.useState(0);
  function aChange(){
    console.log('a is change')
  }
  function bChange(){
    console.log('b is changing')
  }
  useEffect(function(){
    aChange()
    console.log('use effect is running...')
  },[a])
  return (
    <div>
      <h1> A is {a}</h1>
      <h1>B is {b}</h1>
    <button
    onClick={()=>{
      setA(a+1)
    
    }}  
    >Change A</button>
    <button
    onClick={()=>{
      setB(b-1)
    }}
    >Change B</button>

    </div>
  )
}

export default App

