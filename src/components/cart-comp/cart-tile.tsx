import React from 'react';
import { IoTrashOutline } from 'react-icons/io5'
import { TbCurrencyNaira } from 'react-icons/tb';


function CartTile() {
    const blakFriday: string = 'https://image.shutterstock.com/image-illustration/black-friday-sale-poster-shopping-260nw-752443399.jpg';

    return (
        <>
            <div className="flex justify-between mb-2">
                <div>
                    <div className="flex justify-start">
                        <div className='w-12 mr-2'>
                            <img src={blakFriday} width="100%" height="200px" alt="black friday" />
                        </div>
                        <div className='w-4/6 ml-2'>
                            <h3 className='text-xl text-[#424242]'>Smart Fashion Breathable Unisex Sneakers/Canvas-white</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-right">
                        <h3 className='mb-4 text-2xl font-semibold'><TbCurrencyNaira className='inline' />5,500</h3>
                        <span className='mx-2 line-through text-[#8c8c8c]'><TbCurrencyNaira className='inline' />12,000</span>
                        <span className='bg-[#ff926350] text-[#FF9363] py-1 px-3 rounded-md'>-55%</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <div>
                    <div className='my-1 flex justify-between w-16'>
                            <div className='pt-1'>
                                <IoTrashOutline className="text-[#FF9363] text-lg" />
                            </div>
                            <div className='mx-4'>
                                <button className="text-[#FF9363] text-lg">Remove</button>
                            </div>
                    </div>
                </div>

                <div>
                    <div className='my-4 flex justify-between'>
                        <div className=''>
                            <button className="bg-[#FF9363] text-white rounded-[0.25rem] px-2 py-1">-</button>
                        </div>
                        <div className='mx-4'>
                            <button className="border-[1px] border-[#c4c4c4] rounded-[0.25rem] px-2 py-1">1</button>
                        </div>
                        <div>
                            <button className="bg-[#FF9363] text-white rounded-[0.25rem] px-2 py-1">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTile;