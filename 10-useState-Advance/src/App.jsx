import React, { use, useState } from 'react'

const App = () => {
  const[num,setNum]=useState({user:'johan',age:34})
const btnClick=()=>{
const newNum={...num};
newNum.age=87;
setNum(newNum)
}
  return (
    <div>
    <h1>{num.user},{num.age}</h1>
    <button onClick={btnClick}>Update Age</button>      
    </div>
  )
}

export default App
