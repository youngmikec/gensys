import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from 'axios';

// icons
import { TbCurrencyNaira } from 'react-icons/tb';
import { ApiResponse, Cart, CartItem } from '../../model';
import { CREATE_ORDER, RETRIEVE_CARTS } from '../../services';

import Card from '../../shared/card';
import { getItem } from '../../utils';
import CartTile from './cart-tile';
import WhatsappButton from '../whatsapp-btn';

function CartComp() {
    const [loading, setLoading] = useState<boolean>(false);
    const [cart, setCart] = useState<Cart | undefined>();
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const notify = (type: string, msg: string) => {
        if (type === "success") {
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

    const retrieveCarts = () => {
        const user = getItem('clientD');
        if(user.cart){
            setLoading(true);
            const query: string = `?_id=${user.cart}&populate=products.product`;
            RETRIEVE_CARTS(query).then((res: AxiosResponse<ApiResponse>) => {
                const { success, message, payload } = res.data;
                if(success){
                    setLoading(false);
                    setCart(payload[0]);
                    calculateTotalAmount(payload[0]);
                    console.log(message);
                }
            }).catch((err: any) => {
                const { message } = err.response.data;
                setLoading(false);
                console.log(message);
            })
        }
        return;
    }

    //calculate total amount in cart
    const calculateTotalAmount = (cart: Cart | any) => {
        const result: number = cart.products.map((item: CartItem) => item.totalAmount).reduce((a: number, b: number) => a + b);
        setTotalAmount(result);
    }

    const handleCreatOrder = () => {
        setLoading(true);
        const data = {
            totalAmount,
            cart: cart?.id,
            user: cart?.user,
            productItems: cart?.products.map((item: CartItem) => ({qty: item.qty, product: item.product.id, totalAmount: item.totalAmount}))
        }
        CREATE_ORDER(data).then((res: AxiosResponse<ApiResponse>) => {
            const { success } = res.data;
            if(success){
                setLoading(false);
                notify('success', "Your order has been created successfully")
                setTimeout(() => {
                    window.location.href = '/products'
                }, 4000);
            }
        }).catch((err: any) => {
            setLoading(false);
            const { message } = err.response.data;
            notify('error', message);
        })
    }

    useEffect(() => {
        retrieveCarts();
    }, [])

    return (
        <>
            <div className='mx-auto w-11/12 sm:w-10/12 lg:w-9/12 my-6'>
                <div className="grid grid-cols-1 lg:flex lg:justify-between">
                    <div className='w-full lg:w-10/12 mx-2'>
                        <Card type='sm' title={`Cart (${cart?.products.length || 0})`}>
                            <hr />
                            {
                                cart && cart.products.length > 0 ?
                                cart.products.map((item: CartItem, idx: number) => {
                                    return <div className='my-3' key={idx}>
                                        <CartTile productItem={item} />
                                    </div>
                                }) :
                                <div className='my-3'>
                                    {/* <CartTile /> */}
                                    <h3>No Product in cart</h3>
                                </div>
                            }
                        </Card>
                    </div>

                    <div className='w-full sm:w-10/12 md:w-8/12 lg:w-3/12 mx-2'>
                        <Card type='sm' title='Summary'>
                            <hr />
                            <div className='my-1 flex justify-between w-full'>
                                    <div className=''>
                                        <p className='text-[#8c8c8c] text-sm'>total</p>
                                    </div>
                                    <div className='mx-4'>
                                        <p className='text-[#8c8c8c] text-lg font-bold'><TbCurrencyNaira className='inline' />{totalAmount}</p>
                                    </div>
                            </div>

                            <div className="text-center my-6 w-full">
                                <button 
                                    onClick={() => handleCreatOrder()}
                                    className='bg-[#FF9363] text-white font-semibold w-full text-center py-2 rounded-md'
                                >
                                    { loading ? 'Processing' : `Checkout (${totalAmount})`}
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div> 

            <WhatsappButton />
            <ToastContainer />
        </>
    )
}

export default CartComp;