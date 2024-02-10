import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full max-h-[500px] text-gray-200 bg-black/40 flex flex-col justify-center'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4'>The <span className=' text-orange-400'>Best</span></h1>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4'><span className='text-orange-400 '>Foods </span>Delivered</h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="" />
            </div>
        </div>
    )
}

export default Hero