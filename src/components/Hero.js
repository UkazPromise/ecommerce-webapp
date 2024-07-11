import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex items-center justify-center bg-textColor2'>
        <div className='w-[340px] h-16 my-16 lg:w-[450px] lg:h-28 lg:my-16'> 
            <span className='text-center mx-24 lg:mx-40'>Show with us here</span>
            <div className='flex space-x-6 lg:space-x-12 my-8'>
                <p className='border rounded-lg border-spacing-4 w-28 h-8 lg:w-36 text-center border-textColor1 text-textColor1'>All Brands</p>
                <p className='border rounded-lg border-spacing-4 w-36 h-8 lg:w-36 text-center text-textColor2 border-textColor1 bg-textColor1'>New Arrivals</p>
                <p className='border rounded-lg border-spacing-4 w-28 h-8 lg:w-36 text-center border-textColor1 text-textColor1'>Offer Deals</p>
            </div>
        </div>
    </div>
  )
}

export default Hero