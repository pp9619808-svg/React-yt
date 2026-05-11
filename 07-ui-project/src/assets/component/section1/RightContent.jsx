import React from 'react'
import RightCard from './RightCard'

const RightContent = ({users}) => {
  console.log('RightContent users:', users); // Debug log

  if (!users || !Array.isArray(users)) {
    console.warn('users is not an array:', users);
    return (
      <div id='right' className='h-full flex overflow-auto rounded-4xl flex-nowrap gap-10 p-6 w-2/3'>
        No users data available
      </div>
    );
  }
  return (
    <div id='right' className='h-full flex overflow-auto rounded-4xl flex-nowrap gap-10 p-6 w-2/3'>
      {users.map((elem, idx) => (
        <RightCard key={idx} img={elem.img} color={elem.color} tag={elem.tag} id={idx} />
      ))}
    </div>
  );
}

export default RightContent
