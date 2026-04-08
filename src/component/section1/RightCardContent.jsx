import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  console.log(props)
  return (
    <div className='absolute top-0 left-0 h-full w-full  text-2xl p-10 flex flex-col justify-between'>
        <h2 className='text-black bg-white h-12 w-12 rounded-full flex justify-center items-center font-bold '>{props.id+1}</h2>
        <div className='py'>
              <p className='text-white text-lg py-7 mb-7 leading-normal '>{props.introduction}</p>
            <div className='flex justify-between'>
             <button className='bg-blue-400 px-3 py-2 rounded-full mr-10'>{props.tag1}</button>
             <button className='bg-blue-400 px-3 py-2 rounded-full'><ArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
