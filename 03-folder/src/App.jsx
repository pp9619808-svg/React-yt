import React from 'react'
import Card from './assets/component/card'

const App = () => {
  return (
    <div className='parent'>
  <Card  user='parrot' age={12} img='https://images.unsplash.com/photo-1555169062-013468b47731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFycm90fGVufDB8fDB8fHww' words='The parrot is a green bird with a red beak. It can mimic human speech. Parrots eat fruits, seeds, and nuts.'/>
   <Card user='pigeon ' age={43} img='https://images.unsplash.com/photo-1560190929-c3a0e7db1d7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpZ2VvbnxlbnwwfHwwfHx8MA%3D%3D' words='The pigeon is a common city bird. It has a short, thick beak and is often seen in urban areas.'/>
   <Card user='peacock' age={43} img='https://images.unsplash.com/photo-1572877183903-f6f33bbfa7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVhY29ja3xlbnwwfHwwfHx8MA%3D%3D' words='The peacock is a large, colorful bird known for its elaborate tail feathers.'/>
    <Card user='crow ' age={43} img='https://plus.unsplash.com/premium_photo-1673491310534-ea8af31c93ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jvd3xlbnwwfHwwfHx8MA%3D%3D'words='The crow is a common bird with black feathers and a strong, curved beak.'/>
<Card user='sparrow ' age={43} img='https://images.unsplash.com/photo-1560779671-cf681817f968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhcnJvd3xlbnwwfHwwfHx8MA%3D%3D'words='The sparrow is a small, brown bird often seen in gardens and parks.'/>
</div>
  
  )
}

export default App
 