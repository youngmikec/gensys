import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';

const ProductTile = () => {
    const blakFriday: string = 'https://image.shutterstock.com/image-illustration/black-friday-sale-poster-shopping-260nw-752443399.jpg';
    const blakFriday2: string = 'https://img.freepik.com/premium-psd/front-view-black-friday-concept-mock-up_23-2148710570.jpg?w=2000';

    return (
        <>
            <div className='border-[1px] transition-all hover:scale-105 border-[#e7e7e7] max-w-16 rounded-[0.25rem] relative'>
                <div className='absolute top-2 right-2 rounded-md bg-[#FF9363] text-white z-10'>
                    <p className='text-white text-sm px-3 py-1'> - 25%</p>
                </div>
                <div className='min-h-12 max-h-32'>
                    <img src={blakFriday2} width="100%" height="200px" alt="black friday" />
                </div>

                <div className='my-2 px-2'>
                    <p className='text-xl'>nike</p>
                    <h2 className='text-2xl font-semibold mt-6 mb-3'> <TbCurrencyNaira className='inline' />8,000 </h2>
                </div>
            </div>
        </>
    )
}

export default ProductTile