import React from 'react'

const Header = () => {
  return (
    <ul class="flex justify-center flex-col items-center">
        <h1 className='text-3xl font-bold'>Family Wellness</h1>
        <p className='italic'>MASSAGE THERAPY</p>
  <li class=" mt-4 rounded ">
    <a class="inline-block border border-gray-500  py-1 px-16 bg-gray-500 hover:bg-red-700 hover:text-white-600  text-white" href="#">HOME</a>
    <a class="inline-block border border-gray-500  py-1 px-16 bg-gray-500 hover:bg-red-700 hover:text-white-600  text-white" href="#">ABOUT</a>
    <a class="inline-block border border-gray-500  py-1 px-16 bg-gray-500 hover:bg-red-700 hover:text-white-600  text-white" href="#">SURVICE</a>
    <a class="inline-block border border-gray-500  py-1 px-16 bg-gray-500 hover:bg-red-700 hover:text-white-600  text-white" href="#">FAQ</a>
    <a class="inline-block border border-gray-500  py-1 px-16 bg-gray-500 hover:bg-red-700 hover:text-white-600  text-white" href="#">CONTACT</a>
  </li>
</ul>
  )
}

export default Header