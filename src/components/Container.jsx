import React from 'react'

const Container = ({children}) => {
  return (
    <div className='lg:w-[70%] md:w-[80%] w-[90%] mx-auto max-w-[1400px]'>
      {children}
    </div>
  )
}

export default Container
