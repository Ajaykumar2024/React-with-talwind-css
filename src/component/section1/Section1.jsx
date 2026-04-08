import React from 'react'
import Navbar from './navbar'
import Page1Content from './Page1Content'

const Section1 = ({professionals}) => {

  return (
    <div className='h-screen w-full '>
      <Navbar />
      <Page1Content professionals={professionals} />
      
    </div>
  )
}

export default Section1
