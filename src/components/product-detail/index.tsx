import React from 'react';

import { IoMdPhonePortrait } from 'react-icons/io';
import { IoMailSharp } from 'react-icons/io5';
import { TbCurrencyNaira } from 'react-icons/tb';


import Card from '../../shared/card';
import ProductSection from '../../shared/products-layout/product-section';

const ProductDetailComp = () => {
    const blakFriday: string = 'https://image.shutterstock.com/image-illustration/black-friday-sale-poster-shopping-260nw-752443399.jpg';

    return (
        <>
            <div className='mx-auto w-10/12 my-4'>
                <div className='flex justify-between'>
                    <div className='w-9/12 mr-2'>
                        <Card type='lg'>
                            <div className='flex justify-between'>
                                <div>
                                    <img src={blakFriday} width="100%" height="200px" alt="black friday" />
                                </div>
                                <div>
                                    <div id='info-container'>
                                        <h3 className='text-xl text-[#424242]'>Smart Fashion Breathable Unisex Sneakers/Canvas-white</h3>
                                        
                                        <div className='w-full my-6'>
                                            <h2 className='text-lg font-semibold my-2 text-[#8c8c8c] line-through'> <TbCurrencyNaira className='inline' />12,000 </h2>
                                            <h2 className='text-2xl font-semibold my-2'> <TbCurrencyNaira className='inline' />8,000 </h2>
                                        </div>

                                        <hr className='text-[#8c8c8c]' />
                                        <div className='my-4'>
                                            <div className='my-2'>
                                                <h3 className='capitalize text-lg'>Quantity</h3>
                                            </div>
                                            <div className='my-1 flex justify-between w-16'>
                                                <div className=''>
                                                    <button className="border-[1px] border-[#c4c4c4] rounded-sm px-2 py-1">-</button>
                                                </div>
                                                <div className='mx-4'>
                                                    <button className="border-[1px] border-[#c4c4c4] rounded-sm px-2 py-1">1</button>
                                                </div>
                                                <div>
                                                    <button className="border-[1px] border-[#c4c4c4] rounded-sm px-2 py-1">+</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-center my-6 w-full">
                                            <button className='bg-[#FF9363] text-white font-semibold w-full text-center py-2 rounded-md'>
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className='my-6'>
                            <Card type='lg' title='Product Details'>
                                <div className='my-4'>
                                    <p className='text-sm text-[#8c8c8c] text-justify'>
                                        Capture a smart look with this effortlessly stylish collection of fabulous footwear. 
                                        Whether for official, casual or special events, 
                                        we've always got something to meet your taste. All made from durable materials.
                                    </p>
                                    <p className='text-sm text-[#8c8c8c] text-justify'>
                                        Capture a smart look with this effortlessly stylish collection of fabulous footwear. 
                                        Whether for official, casual or special events, 
                                        we've always got something to meet your taste. All made from durable materials.
                                    </p>
                                </div>
                            </Card>
                        </div>

                        <div className='my-4'>
                            <ProductSection />
                        </div>
                    </div>

                    <div className='w-3/12 ml-2'>
                        <div className='my-4'>
                            <Card type='sm' title='Seller Information'>
                                <div className="flex justify-start my-2">
                                    <div className='mx-2'>
                                        <IoMdPhonePortrait className="text-[#91e791]" />
                                    </div>
                                    <div className='mr-2 text-sm'>09109916977</div>
                                </div>
                                <div className="flex justify-start my-2">
                                    <div className='mx-2'>
                                        <IoMailSharp className="text-[#91e791]" />
                                    </div>
                                    <div className='mr-2 text-sm'>generates@gmail.com</div>
                                </div>
                            </Card>
                        </div>
                        <div className='my-4'>
                            <Card type='sm'>
                                <div className="flex justify-start my-2">
                                    <div className='mx-2 w-5/12'>
                                        <img src={blakFriday} width="100%" height="200px" alt="black friday" />
                                    </div>
                                    <div className='mr-2 text-sm w-7/12'>
                                        <h2 className='text-sm font-semibold my-2 text-[#8c8c8c] line-through'> <TbCurrencyNaira className='inline' />12,000 </h2>
                                        <h2 className='text-lg font-semibold my-2'> <TbCurrencyNaira className='inline' />8,000 </h2>
                                    </div>
                                </div>
                                <div className="text-center my-2 w-full">
                                    <button className='bg-[#FF9363] text-white font-semibold w-full text-center py-2 rounded-md'>
                                        Add To Cart
                                    </button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailComp;