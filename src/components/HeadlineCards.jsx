import React from 'react';
import cardData from '../assets/data/cardData.json'

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

            {/* Card */}
            {cardData.map((card) =>
                <div className='rounded-xl relative' key={card['id']}>
                    {/* Overlay */}
                    <div className='absolute bg-black/30 w-full h-full rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4'>{card['headline']}</p>
                        <p className='px-2 text-lg'>{card['sub-head']}</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-3'>Order Now</button>
                    </div>
                    <img className='rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover' src={card['img-url']} alt="" />
                </div>
            )}
        </div>
    )
}

export default HeadlineCards