import React from 'react'
import LeftContent from './leftContent'
import RightContent from './RightContent'
const Page1Content = ({professionals}) => {
    console.log(professionals)
 
  return (
    <div className='h-[90vh] w-full flex px-15 pb-16 pt-5 '>
      <LeftContent/>
      <RightContent professionals={professionals}/>
    </div>
  )
}

export default Page1Content
