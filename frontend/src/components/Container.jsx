import React from 'react'

const Container = ({ children }) => {
  return (
    <section className='flex flex-col justify-center items-center w-full'>{children}</section>
  )
}

export default Container;