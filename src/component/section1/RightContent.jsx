import React from 'react'
import RightCard from './RightCard'

const RightContent = ({professionals}) => {

  return (
    <div id="right" className="h-full w-3/4   px-6 py-2 flex flex-nowrap overflow-x-auto gap-5  ">
         {professionals.map(function(ele,idx){
          return <RightCard key={idx}  img={ele.img} introduction={ele.introduction}  tag1={ele.tag1} id={idx}/>
         })}


    </div>
      
     
  )
}

export default RightContent
