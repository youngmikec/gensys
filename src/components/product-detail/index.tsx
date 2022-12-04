import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from 'axios';

import { IoMdPhonePortrait } from 'react-icons/io';
import { IoMailSharp } from 'react-icons/io5';
import { TbCurrencyNaira } from 'react-icons/tb';


import Card from '../../shared/card';
import ProductSection from '../../shared/products-layout/product-section';
import { ApiResponse, Product } from '../../model';
import { RETRIEVE_PUBLIC_PRODUCTS } from '../../services';
import { CREATE_CART_BY_USER } from '../../services/carts';
import { getItem } from '../../utils';

const ProductDetailComp = () => {
    const blakFriday: string = 'https://image.shutterstock.com/image-illustration/black-friday-sale-poster-shopping-260nw-752443399.jpg';

    const [loading, setLoading] = useState<boolean>(false);
    let [orderQuantity, setOrderQuantity] = useState<number>(1);

    const params = useParams();
    const { id } = params;

    const [product, setProduct] = useState<Product | undefined>();

    const retrieveProducts = () => {
        setLoading(true);
        const query: string = `?_id=${id}&populate=category,supplier,createdBy`;
        RETRIEVE_PUBLIC_PRODUCTS(query)
        .then((res: AxiosResponse<ApiResponse>) => {
            setLoading(false);
            const { message, payload } = res.data;
            notify("success", message);
            setProduct(payload[0]);
        })
        .catch((err: any) => {
            setLoading(false);
            const { message } = err.response.data;
            notify("error", message);
        });
    };

    const notify = (type: string, msg: string) => {
        if(type === "success") {
            toast.success(msg, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

        if (type === "error") {
            toast.error(msg, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    const handleQuantityChange = (mode: string) => {
        if(mode === 'sum'){
            setOrderQuantity(orderQuantity ++)
        }
        if(mode === 'sub'){
            setOrderQuantity(orderQuantity --)
        }
    }

    const calculateDiscount = (price: number| any, discount: number | any): number => {
        return ((discount/100)*price) + price;
    }

    const handleAddToCart = () => {
        const user = getItem('clientD');
        if(!!user) return notify('error', 'Pls signin or sign up');

        // create products 
        const data = {
            user: user.id,
            products: []
        }

        CREATE_CART_BY_USER(data).then((res: AxiosResponse<ApiResponse>) => {
            const { message, success, payload } = res.data;
            if(success){
                notify('success', message)
            }
        })
    }


    useEffect(() => {
        retrieveProducts();
    }, [])


    return (
        <>
            <div className='mx-auto w-10/12 my-4'>
                <div className='flex justify-between'>
                    <div className='w-9/12 mr-2'>
                        <Card type='lg'>
                            <div className='flex justify-between'>
                                <div className='w-6/12 mr-2'>
                                    <img src={product?.productImage || blakFriday} width="100%" height="200px" alt="black friday" />
                                </div>
                                <div className='w-6/12'>
                                    <div id='info-container'>
                                        <h3 className='text-xl text-[#424242]'>{product?.name}</h3>
                                        
                                        <div className='w-full my-6'>
                                            <h2 className='text-lg font-semibold my-2 text-[#8c8c8c] line-through'> <TbCurrencyNaira className='inline' />{(calculateDiscount(product?.price, product?.discount))} </h2>
                                            <h2 className='text-2xl font-semibold my-2'> <TbCurrencyNaira className='inline' /> {product?.price}</h2>
                                        </div>

                                        <hr className='text-[#8c8c8c]' />
                                        <div className='my-4'>
                                            <div className='my-2'>
                                                <h3 className='capitalize text-lg'>Quantity</h3>
                                            </div>
                                            <div className='my-1 flex justify-between w-16'>
                                                <div className=''>
                                                    <button 
                                                        className="border-[1px] border-[#c4c4c4] rounded-sm px-2 py-1"
                                                        onClick={() => handleQuantityChange('sub')}
                                                    >-</button>
                                                </div>
                                                <div className='mx-4'>
                                                    <button className="border-[1px] border-[#c4c4c4] rounded-sm px-2 py-1">{orderQuantity}</button>
                                                </div>
                                                <div>
                                                    <button 
                                                        className="border-[1px] border-[#c4c4c4] rounded-sm px-2 py-1"
                                                        onClick={() => handleQuantityChange('sum')}
                                                    >+</button>
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
                                        { product?.description }
                                    </p>
                                </div>
                            </Card>
                        </div>

                        <div className='my-4'>
                            {/* <ProductSection /> */}
                        </div>
                    </div>

                    <div className='w-3/12 ml-2'>
                        <div className='my-4'>
                            <Card type='sm' title='Seller Information'>
                                <div className="flex justify-start my-2">
                                    <div className='mx-2'>
                                        <IoMdPhonePortrait className="text-[#91e791]" />
                                    </div>
                                    <div className='mr-2 text-sm'>{product?.createdBy?.phone}</div>
                                </div>
                                <div className="flex justify-start my-2">
                                    <div className='mx-2'>
                                        <IoMailSharp className="text-[#91e791]" />
                                    </div>
                                    <div className='mr-2 text-sm'>{product?.createdBy?.email}</div>
                                </div>
                            </Card>
                        </div>
                        <div className='my-4'>
                            <Card type='sm'>
                                <div className="flex justify-start my-2">
                                    <div className='mx-2 w-5/12'>
                                        <img src={product?.productImage || blakFriday} width="100%" height="200px" alt="black friday" />
                                    </div>
                                    <div className='mr-2 text-sm w-7/12'>
                                        <h2 className='text-sm font-semibold my-2 text-[#8c8c8c] line-through'> <TbCurrencyNaira className='inline' />{(calculateDiscount(product?.price, product?.discount))}</h2>
                                        <h2 className='text-lg font-semibold my-2'> <TbCurrencyNaira className='inline' />{product?.price} </h2>
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

            <ToastContainer />
        </>
    )
}

export default ProductDetailComp;