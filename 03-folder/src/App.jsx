import React from 'react'
import Card from './assets/component/card'

const App = () => {
  return (
    <div className='parent'>
  <Card  user='Alice' age={12} img='https://images.unsplash.com/photo-1773777910397-2162b3ec2809?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  <Card  user='John' age={25} img='https://images.unsplash.com/photo-1773408151429-4add3b61d7bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  <Card  user='i am' age={30} img='https://images.unsplash.com/photo-1773614507456-f95376a957e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'/>
</div>
  
  )
}

export default App
 