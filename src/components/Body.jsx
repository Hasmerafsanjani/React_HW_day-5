import React from 'react'

const Body = () => {
  return (
    <div className='flex justify-center flex-col items-center '>
      <div className=' flex justify-center flex-col items-center w-4/6 rounded m-6 h-72 bg-red-800'>
        <h1 className='text-3xl font-extrabold'>Lorem, ipsum dolor.</h1>
        <p className='m-7 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio praesentium inventore br dicta recusandae <br />minima animi harum vero unde exercitationem asperiores.</p>
        <div className='flex gap-10'>
          <button className='border-2 border-white text-white text-lg px-7 py-2'>learn more</button>
          <button className='border-2 border-white text-white text-lg  px-7  py-2'>contact us</button>
        </div>
      </div>
      <div className=' flex justify-evenly flex-col items-center w-4/6 rounded m-2 h-72 bg-white p-7 text-black'>
        <p className='text-red-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem ipsam laboriosam tempore eveniet soluta maiores iure laborum sint sed.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit totam eligendi porro voluptates. Sit, voluptates.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iste architecto reiciendis quasi eligendi illum distinctio!</p>
        </div>
        <div className='bg-white w-4/6 rounded text-black flex justify-center flex-col items-center p-2 '>
        <h1 className='text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur.</h1>
        <p className='p-2'>Reprehenderit totam eligendi porro</p>
          <p>Esse iste architecto reiciendis</p>
          </div>
      </div>
  )
}

export default Body