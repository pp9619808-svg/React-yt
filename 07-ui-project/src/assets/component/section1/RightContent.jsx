import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (users) => {

  return (
    <div id='right' className='h-full flex overflow-auto rounded-4xl flex-nowrap gap-10 p-6 w-2/3  '>
     {users.map(function(elem,idx) {
      return <RightCard key={idx} img={elem.img} color={elem.color} tag={elem.tag} id={idx}/>
     })}
    </div>
  )   
}  

export default RightContent
