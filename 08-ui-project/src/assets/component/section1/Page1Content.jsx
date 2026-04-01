

import React from 'react'
import LeftContent from './LeftContent';
import RightContent from './RightContente'
const Page1Content = (props) => {
  console.log();
  return (
    <div className='py-10 flex items-center gap-10 h-[90vh] px-18'>
      <LeftContent/>
      <RightContent user={props.user}/>
    </div>
  )
}

export default Page1Content

