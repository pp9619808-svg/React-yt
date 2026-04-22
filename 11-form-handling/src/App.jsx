import React from 'react'

const App = () => {
  const submitHandler=()=>{
    t.preventDefault()
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={(t)=>{
        submitHandler(t)
      }}>
      <input type='text' placeholder='enter your name'/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
