import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border-2 text-lg border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-blue-800 to-violet-500 bg-clip-text text-transparent mb-6 sm:mb-10'>Choose the plan that's right for you</h1>
      <div className='flex flex-wrap justify-center gap-8 text-left'>
        {plans.map((item , index)=>(
          <div className='bg-gray-200 drop-shadow-lg  rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500' key={index}>
             <img width={120} className='drop-shadow-lg mb-2 border-3 border-indigo-500 rounded-full py-1/2 bg-gradient-to-r from-zinc-100 to-gray-100 overflow-hidden' src={assets.logo} alt="" />
             <p className='mt-3 text-2xl sm:text-md md:text-2xl lg:text-3xl text-zinc-800'>{item.id}</p>
             <p className='text-gray-900 font-sm'>{item.desc}</p>
             <p className='mt-6 text-lg text-black font-semibold'>
                <span className='text-3xl'>${item.price}</span> / {item.credits} credits
             </p>
             <button className='w-full bg-gray-800  text-white mt-8 text-sm rounded-md py-2.5 min-w-50 cursor-pointer drop-shadow-lg hover:bg-black hover:transition-all duration-500'>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
