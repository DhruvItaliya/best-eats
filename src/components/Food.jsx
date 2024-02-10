import React, { useState } from 'react'
import { data } from '../assets/data/data';
import { FaRegSadTear } from "react-icons/fa";

const Food = () => {
    const [foods, setFoods] = useState(data);
    const handlePriceFilter = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

    const handleTypeFilter = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }
    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-xl py-1'>Filter Type</p>
                    <div className='flex flex-wrap'>
                        <button className='m-1 hover:bg-orange-200' onClick={() => setFoods(data)}>All</button>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handleTypeFilter('gujarati')}>Gujarati</button>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handleTypeFilter('')}>Punjabi</button>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handleTypeFilter('salad')}>Salads</button>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handleTypeFilter('burger')}>Burger</button>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handleTypeFilter('pizza')}>Pizza</button>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handleTypeFilter('chicken')}>Chicken</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-xl py-1'>Filter Price</p>
                    <div className='flex flex-wrap'>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handlePriceFilter('$')}>$</button>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handlePriceFilter('$$')}>$$</button>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handlePriceFilter('$$$')}>$$$</button>
                        <button className='m-1 hover:bg-orange-200' onClick={() => handlePriceFilter('$$$$')}>$$$$</button>
                    </div>
                </div>
            </div>

            {/* Display food */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods && foods.length > 0 ? (foods.map((food, index) =>
                    <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
                        <img src={food.image} className='w-full h-[200px] object-cover rounded-t-lg' alt={food.name} />
                        <div className='flex justify-between py-4 px-1'>
                            <p className='font-bold px-1'>{food['name']}</p>
                            <p><span className='font-bold rounded-full bg-orange-500 px-2'>{food.price}</span></p>
                        </div>
                    </div>
                )) : <div className='flex items-center justify-center h-auto pt-12 text-2xl'><p className='flex flex-row w-auto text-gray-500 '>We did't find any food!<span><FaRegSadTear className='mx-0.5 my-1'/></span></p></div>}
            </div>
        </div>
    )
}

export default Food