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
                    <div className="md:text-right lg:text-right my-2 md:my-0 lg:my-0">
                        <h3 className='mb-4 text-lg md:text-xl lg:text-xl font-semibold'><TbCurrencyNaira className='inline' />{product.price}</h3>
                        <p className='mx-2 line-through text-[#8c8c8c]'><TbCurrencyNaira className='inline' />12,000</p>
                        <p className='bg-[#ff926350] text-[#FF9363] py-1 px-3 rounded-md'>-{product.discount}%</p>
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
            </div>
        </>
    )
}

export default CartTile;