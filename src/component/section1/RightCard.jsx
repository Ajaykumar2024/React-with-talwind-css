import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div id='card' className='h-full w-80 relative  rounded-4xl overflow-hidden shrink-0'>
          <img className='h-full w-full object-cover' src={props.img} alt="" />
          <RightCardContent introduction={props.introduction} tag1={props.tag1} id={props.id}/>
          
    </div>
  )
}

export default RightCard
