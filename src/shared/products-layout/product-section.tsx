import React from 'react';
import ProductTile from '../../components/product-tile';

const ProductSection = () => {
    return (
        <>
            <div className='bg-white shadow-md'>
                <div className='bg-black text-white p-3 flex justify-between rounded-t-md'>
                    <div>
                        <h4 className='font-semibold'>Trending now</h4>
                    </div>
                    <div>
                        <h4 className='font-thin'>view more</h4>
                    </div>
                </div>

                <div id='body' className='p-4 grid grid-cols-4 space-x-2 h-max '>
                    <div>
                        <ProductTile />
                    </div>
                    <div>
                        <ProductTile />
                    </div>
                    <div>
                        <ProductTile />
                    </div>
                    <div>
                        <ProductTile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSection;