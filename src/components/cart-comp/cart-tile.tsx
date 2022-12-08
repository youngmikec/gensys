import React from 'react';
import { IoTrashOutline } from 'react-icons/io5'
import { TbCurrencyNaira } from 'react-icons/tb';
import { ProductItem } from '../../model';

type Props = {
    productItem: ProductItem
}

function CartTile({ productItem }: Props) {
    const blakFriday: string = 'https://image.shutterstock.com/image-illustration/black-friday-sale-poster-shopping-260nw-752443399.jpg';
    const { product } = productItem;
    const style = {
        backgroundImage: `url(${product.productImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
        <>
            <div className="flex justify-between mb-2">
                <div>
                    <div className="flex justify-start">
                        <div className='w-12 mr-2 h-12' style={style}>
                            {/* <img src={ product.productImage || blakFriday } width="100%" height="200px" alt="black friday" /> */}
                        </div>
                        <div className='w-4/6 ml-2'>
                            <h3 className='text-lg text-[#424242]'>{ product.name }</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-right">
                        <h3 className='mb-4 text-xl font-semibold'><TbCurrencyNaira className='inline' />{product.price}</h3>
                        <span className='mx-2 line-through text-[#8c8c8c]'><TbCurrencyNaira className='inline' />12,000</span>
                        <span className='bg-[#ff926350] text-[#FF9363] py-1 px-3 rounded-md'>-{product.discount}%</span>
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
                            <button className="border-[1px] border-[#c4c4c4] rounded-[0.25rem] px-2 py-1">{productItem.qty}</button>
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