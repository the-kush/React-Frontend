import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'> 
        <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips and tricks to optimise your flow?</h1>
            <p>Sign up to our news letter and stay upto date</p>
        </div>
        <div className='my-2'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='sm:mr-2 p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter your email' />
            <button className='bg-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto py-2 text-2xl text-black'>Notify Me</button>
        </div>
        <p>We care about the protection of your data. Read our <span className='text-[#00df9a] hover:text-yellow-200'> privacy policy </span></p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
