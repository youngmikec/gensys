import React, { ReactNode } from 'react';
import { Category } from '../../model';
import Card from '../card';
import ProductBanners from './product-banners';

type Props = {
    children: ReactNode,
    categories?: Category[]
}

const ProductsLayout = ({ children, categories }: Props) => {
  return (
    <>
        <div className='mx-auto w-11/12 my-4'>
            <div className='flex justify-between'>
                <div className='w-3/12 mx-4'>
                    <Card type='sm'>
                        <ul>
                            <li>Head sets</li>
                            <li>Head sets</li>
                            <li>Head sets</li>
                            <li>Head sets</li>
                            <li>Head sets</li>
                        </ul>
                    </Card>
                </div>

                <div className='w-9/12 mx-4'>
                    <div className='mb-6'>
                        <ProductBanners />
                    </div>

                    <div className='my-4'>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductsLayout;