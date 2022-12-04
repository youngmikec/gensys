import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from 'axios';


import { ApiResponse, Product } from '../../../model';
import { RETRIEVE_PRODUCTS } from '../../../services';
import Card from '../../../shared/card';



const AdminProductDetailComp = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const params = useParams();
    const { id } = params;

    const [product, setProduct] = useState<Product | undefined>();

    const retrieveProducts = () => {
        setLoading(true);
        const query: string = `?_id=${id}&populate=category,supplier`;
        RETRIEVE_PRODUCTS(query)
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


    useEffect(() => {
        retrieveProducts();
    }, [])


    return (
        <>
            <Card type='lg'>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-3'>
                    <div>
                        <div
                            className={`border-2 rounded-md my-3 h-60 w-full flex justify-center border-[#BFBFBF] px-4 py-2 `}
                        >
                            {
                                product?.productImage &&
                                <img src={product?.productImage} alt="uploaded" /> 
                            }
                        </div>
                    </div>

                    <div>
                        <div id='form'>

                            <div className="my-3">
                                <p><b>Product Name:</b> {product?.name}</p>
                            </div>

                            <div className="my-3">
                                <p><b>Product Category:</b> {product?.category?.name}</p>
                            </div>

                            <div className="my-3">
                                <p><b>Product Sku:</b> {product?.sku}</p>
                            </div>

                            <div className="my-3">
                                <p><b>Product Make:</b> {product?.make}</p>
                            </div>

                            <div className="my-3">
                                <p><b>Price:</b> <span className='line-through'>N</span>{product?.price}</p>
                            </div>

                            <div className="my-3">
                                <p><b>Discount:</b> {product?.discount}%</p>
                            </div>

                            <div className="my-3">
                                <p><b>Quantity:</b> {product?.quantity}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <textarea
                        name="description"
                        rows={10}
                        value={product?.description}
                        className={`bg-white text-[#6A6A6A] border-2 border-[#BFBFBF] rounded-md px-4 py-2 w-full`}
                    >

                    </textarea>
                </div>
            </Card>

            <ToastContainer />
        </>
    )
}

export default AdminProductDetailComp;