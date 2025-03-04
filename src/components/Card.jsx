import React from 'react';
import CardData from '@/utils/cardData';

const Card = () => {
    return (
        <div className='flex flex-wrap gap-4 px-4 py-8 justify-center'>
            {CardData.slice(0,3).map((item, i) => (
                <div 
                    key={i} 
                    className='w-full sm:w-[340px] md:w-[380px] h-[220px] rounded-md p-2 bg-cover bg-center relative flex items-center shadow-md'
                    style={{ backgroundImage: `url(${item.image})` }} 
                >
                    <div className='p-2 bg-opacity-80 rounded-lg text-black w-[80%] sm:w-[70%] md:w-[60%]'>
                        <h5 className='text-orange-400 text-xs sm:text-sm'>{item.para}</h5>
                        <h1 className='text-md font-bold my-1 sm:my-2'>{item.title}</h1>
                        <p className='text-sm sm:text-base'>{item.desc}</p>
                        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all">
                            {item.btnText}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
