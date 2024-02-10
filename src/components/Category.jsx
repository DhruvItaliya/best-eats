import React from 'react'
import { categories } from '../assets/data/data'
const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        {/* Categories */}
        <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categories.map((category,index)=>
                <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{category.name}</h2>
                    <img src={category.image} className='w-20' alt={category.name} />
                </div>
            )}
        </div>
    </div>
  )
}

export default Category