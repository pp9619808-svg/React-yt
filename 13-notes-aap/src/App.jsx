import React from 'react'
import { X } from 'lucide-react';

const App = () => {

const [title, setTitle] = React.useState('')
const[details, setDetails]= React.useState('')
const[task, setTask]= React.useState([])

const submitHandler = (e)=>{
  e.preventDefault()

const copyTask=[...task];

 copyTask.push({title,details})
 setTask(copyTask)
 
console.log(task);

  setTitle('')
  setDetails('')
}

const deleteNote =(idx) =>{
const copyTask=[...task];
copyTask.splice(idx,1)
setTask(copyTask)

}



  return (
    <div  className='h-screen  lg:flex bg-black text-white '>
    
     <form  onSubmit = {(e) => {
      submitHandler(e)
     }} 
     className=' flex  w-full flex-col items-start   gap-4 p-10'>
    <h1 className='text-5xl font-bold'> Add Note
       </h1>
 <input 
        
     type="text"
     
      placeholder="Enter title..."
     className='px-5  lg:w-1/2 py-2 border-2 rounded'
       value={title}
       onChange={(e) =>{
        setTitle(e.target.value)
       }}
     />
     
      <textarea
       placeholder="write Details ...."  
       className='px-5 w-full py-2 h-32 border-2 rounded flex items-start outline-none  '
        value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }}
        />
        <button
         className='  bg-white active:bg-gray-400 text-black  w-full font-medium rounded px-5 py-2'
         >
          Add Note
          </button> 
   
    </form>
<div className='lg:w-1/2 lg:border-l-2 p-10'>
 <h1 className='text-4xl font-bold'>Recent Note </h1>
  <div className='flex flex-wrap gap-5 mt-5  h-[90%] items-start  justify-start overflow-y-auto  '>
   {task.map(function(elem,idx){
    return (
     <div key={idx} className='h-72 w-52 rounded-2xl p-4 text-black bg-amber-50    flex flex-col shadow-lg hover:shadow-xl transition-shadow  '>
      <h3 className='font-bold text-lg mb-3 line-clamp-1 bg-white px-3 py-2 rounded-lg shadow-sm'>{elem.title}</h3>
      <p className='text-sm font-medium leading-relaxed text-gray-800 flex-1  bg-white px-3 py-2 rounded-lg shadow-sm overflow-auto max-h-36 mb-3'>{elem.details}</p>
      <button onClick={() => {
        deleteNote(idx)
      }}
         className='bg-red-500  text-white py-2 rounded-lg w-full font-bold text-sm  
      active:scale-95 '> Delete</button>
     </div>
     
    )
   })}
  </div>
</div>
    </div>
  
  )
}

export default App

