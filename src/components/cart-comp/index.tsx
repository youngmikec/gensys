import React from 'react';

// icons
import { TbCurrencyNaira } from 'react-icons/tb';

import Card from '../../shared/card';
import CartTile from './cart-tile';

function CartComp() {
    
    return (
        <>
            <div className='mx-auto w-9/12 my-6'>
                <div className="flex justify-between">
                    <div className='w-10/12 mx-2'>
                        <Card type='sm' title='Cart (1)'>
                            <hr />
                            <div className='my-2'>
                                <CartTile />
                            </div>
                            <div className='my-2'>
                                <CartTile />
                            </div>
                            <div className='my-2'>
                                <CartTile />
                            </div>
                        </Card>
                    </div>

                    <div className='w-3/12 mx-2'>
                        <Card type='sm' title='Summary'>
                            <hr />
                            <div className='my-1 flex justify-between w-full'>
                                    <div className=''>
                                        <p className='text-[#8c8c8c] text-sm'>total</p>
                                    </div>
                                    <div className='mx-4'>
                                        <p className='text-[#8c8c8c] text-lg font-bold'><TbCurrencyNaira className='inline' />5,500</p>
                                    </div>
                            </div>

                            <div className="text-center my-6 w-full">
                                <button className='bg-[#FF9363] text-white font-semibold w-full text-center py-2 rounded-md'>
                                    Checkout (5,500)
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartComp;