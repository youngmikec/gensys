import React from 'react';
import { Link } from 'react-router-dom';

import ProductTile from '../../components/product-tile';
import { Product } from '../../model';

type Props = {
    title: string,
    products: Product[]
}

const ProductSection = ({ title, products }: Props) => {
    return (
        <>
            <div className='bg-white shadow-md'>
                <div className='bg-black text-white p-3 flex justify-between rounded-t-md'>
                    <div>
                        <h4 className='font-semibold'>{ title }</h4>
                    </div>
                    <div>
                        <h4 className='font-thin'>view more</h4>
                    </div>
                </div>

                <div id='body' className='p-4 grid grid-cols-4 space-x-2 h-max '>
                    {
                        products.length > 0 &&
                        products.map((item: Product, idx: number) => {
                            return <div key={idx}>
                                    <Link to={`/products/${item.id}`}>
                                        <ProductTile product={item} />
                                    </Link>
                                </div>
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default ProductSection;