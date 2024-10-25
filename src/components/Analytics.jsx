import React from 'react'
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] text-xl font-bold'>Data Analystic Dashboard</p>
            <h1 className='text-2xl md:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis qui ab aliquam, voluptate quas, perferendis in esse, vel quasi aut commodi rem ullam laboriosam provident amet sapiente enim autem.</p>
            <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium text-2xl mx-auto md:mx-0 py-2'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
