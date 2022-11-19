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
                <div className='w-2/12 mx-4'>
                    <Card type='sm' title='Cateogries'>
                        <ul className='my-4'>
                            <li>Head sets</li>
                            <li>Head sets</li>
                            <li>Head sets</li>
                            <li>Head sets</li>
                            <li>Head sets</li>
                        </ul>
                    </Card>
                </div>

                <div className='w-10/12 mx-4'>
                    <div className='mb-6'>
                        <ProductBanners />
                    </div>

                    <div className='my-4'>
                        { children }
                    </div>

                    <div className="my-4">
                        <Card type='lg' title='Generates Shop: Online Shopping in Nigeria'>
                            <div className='my-2'>
                                <p className='text-[#8c8c8c] text-sm'>
                                    PMT shop is your number one online shopping site in Nigeria. We are an online store that provide you with a wide range of products you can trust. You can have your items delivered directly to you by out Logistics agent. Shop online with great ease as you pay with our online payment method which guarantees you the safest online shopping, allowing you to make stress free payments. Whatever it is you wish to buy, 
                                    PMT Shop offers you all and lots more at prices which you can trust. PMT Shop has payment options for everyone irrespective of taste, class, and preferences. Here, you also have the option to make your payment on delivery for extra convenience. Shopping online in Nigeria is easy and convenient with PMT Shop. We Take part in the deals of the day and discover the best prices on a wide range of products.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductsLayout;