import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { Product } from '../../model';


type Props = {
    product: Product
}
const ProductTile = ({ product }: Props) => {
    const style = {
        backgroundImage: `url(${product?.productImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <>
            <div className='border-[1px] transition-all hover:scale-105 border-[#e7e7e7] max-w-16 h-max rounded-[0.25rem] relative'>
                <div className='absolute top-2 right-2 rounded-md bg-[#FF9363] text-white z-10'>
                    <p className='text-white text-sm px-3 py-1'> - {product?.discount}%</p>
                </div>
                <div className='text-center h-52' style={style}>
                    {/* <img src={product?.productImage} className="aspect-auto" alt="black friday" /> */}
                </div>

                <div className='my-6 px-2'>
                    <p className='text-lg'>{product?.name.length > 30 ? product.name.slice(0, 31).concat('...') : product.name}</p>
                    <h2 className='text-2xl font-semibold mt-6 mb-3'> <TbCurrencyNaira className='inline' /> { product?.price } </h2>
                </div>
            </div>
        </>
    )
}

export default ProductTile