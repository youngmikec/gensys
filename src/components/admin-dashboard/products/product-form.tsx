import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';

import { ApiResponse, Category } from '../../../model';
import { CREATE_PRODUCT } from '../../../services';
import { ADD_TO_PRODUCTS } from '../../../store/products';

type Props = {
    categories: Category[]
}

const ProductForm = ({categories}: Props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const [productImage, setProductImage] = useState<{value: string, error: boolean }>({value: '', error: false});
    const [name, setName] = useState<{value: string, error: boolean }>({value: '', error: false});
    const [sku, setSku] = useState<{value: string, error: boolean }>({value: '', error: false});
    const [make, setMake] = useState<{value: string, error: boolean }>({value: '', error: false});
    const [description, setDescription] = useState<{value: string, error: boolean }>({value: '', error: false});
    const [price, setPrice] = useState<{value: number, error: boolean }>({value: 0, error: false});
    const [discount, setDiscount] = useState<{value: number, error: boolean }>({value: 0, error: false});
    const [quantity, setQuantity] = useState<{value: number, error: boolean }>({value: 0, error: false});
    const [category, setCategory] = useState<{value: string, error: boolean }>({value: '', error: false});

    const fileRef = useRef<HTMLInputElement>(null);

    const openFile = () => {
        return fileRef.current?.click();
    }

    const handleFileRead = async (event: any) => {
        const file = event.target.files[0];
        const base64: any = await convertBase64(file);
        setProductImage({...productImage, value: base64});
    }

    const convertBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
            resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

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

    const inputCheck = (): boolean => {
        let isValid: boolean = true;
        if (name.value === "" || undefined || null) {
          isValid = false;
          setName({ ...name, error: true });
        } else {
          setName({ ...name, error: false });
        }
        if (sku.value === "" || undefined || null) {
          isValid = false;
          setSku({ ...sku, error: true });
        } else {
          setSku({ ...sku, error: false });
        }
        if (make.value === "" || undefined || null) {
          isValid = false;
          setMake({ ...make, error: true });
        } else {
          setMake({ ...make, error: false });
        }
        if (category.value === "" || undefined || null) {
          isValid = false;
          setCategory({ ...category, error: true });
        } else {
          setCategory({ ...category, error: false });
        }
        if (description.value === "" || undefined || null) {
          isValid = false;
          setDescription({ ...description, error: true });
        } else {
          setDescription({ ...description, error: false });
        }
        if (description.value === "" || undefined || null) {
          isValid = false;
          setDescription({ ...description, error: true });
        } else {
          setDescription({ ...description, error: false });
        }
        if (productImage.value === "" || undefined || null) {
          isValid = false;
          setProductImage({ ...productImage, error: true });
        } else {
          setProductImage({ ...productImage, error: false });
        }
        if (price.value === 0 || undefined || null) {
          isValid = false;
          setPrice({ ...price, error: true });
        } else {
          setPrice({ ...price, error: false });
        }
        if (discount.value === 0 || undefined || null) {
          isValid = false;
          setDiscount({ ...discount, error: true });
        } else {
          setDiscount({ ...discount, error: false });
        }
        if (quantity.value === 0 || undefined || null) {
          isValid = false;
          setQuantity({ ...quantity, error: true });
        } else {
          setQuantity({ ...quantity, error: false });
        }

        return isValid;
    };

    const clearFormStates = () => {
        setProductImage({value: '', error: false});
        setName({value: '', error: false});
        setSku({value: '', error: false});
        setMake({value: '', error: false});
        setDescription({value: '', error: false});
        setCategory({value: '', error: false});
        setPrice({value: 0, error: false});
        setDiscount({value: 0, error: false});
        setQuantity({value: 0, error: false});
    }

    const handleSubmit = () => {
        if (inputCheck()) {
            setLoading(true);
            const data = { 
                name: name.value,
                sku: sku.value,
                make: make.value,
                description: description.value,
                price: price.value,
                discount: discount.value,
                quantity: quantity.value,
                category: category.value,
                productImage: productImage.value
            };
          // axios.defaults.withCredentials = true;
          CREATE_PRODUCT(data)
            .then((res: AxiosResponse<ApiResponse>) => {
                const { message, payload } = res.data;
                setLoading(false);
                notify("success", message);
                dispatch(ADD_TO_PRODUCTS(payload));
                clearFormStates();
            })
            .catch((err: any) => {
                const { message } = err.response.data;
                notify("error", message);
                setLoading(false);
            });
        }else {
            notify("error", `Fill in all required fields`);
        }  
      };



    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-3'>
                <div>
                    <div
                        className={`border-2 rounded-md my-3 h-60 w-full flex justify-center ${
                            productImage.error ? "border-red-500" : "border-[#BFBFBF]"
                        } px-4 py-2 `}
                    >
                        {
                            productImage.value ? 
                            <img src={productImage?.value} alt="uploaded" /> :
                            <button className='text-center text-[#7F7F80]' onClick={() => openFile()}>
                                + <br /> Choose file
                            </button>
                        }
                        <input 
                            type="file" 
                            className='hidden'
                            ref={fileRef}
                            onChange={(e) => handleFileRead(e)}
                        />
                    </div>
                </div>

                <div>
                    <div id='form'>

                        <div className="my-3">
                            <label htmlFor="name" className="text-[#BFBFBF] text-sm block">
                                Product Name*
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name.value}
                                onChange={(e) =>
                                    setName({ ...name, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    name.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="name" className="text-[#BFBFBF] text-sm block">
                                Product Category*
                            </label>
                            <select 
                                name="category"
                                value={category.value}
                                onChange={(e) =>
                                    setCategory({ ...category, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    category.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            >
                                <option value="">Product category</option>
                                {
                                    categories.length > 0 && 
                                    categories.map((item: Category, idx: number) => {
                                        return <option value={item.id}>{item.name}</option>
                                    })
                                }
                                
                            </select>
                        </div>

                        <div className="my-3">
                            <label htmlFor="sku" className="text-[#BFBFBF] text-sm block">
                                Product SKU*
                            </label>
                            <input
                                type="text"
                                name="sku"
                                value={sku.value}
                                onChange={(e) =>
                                    setSku({ ...sku, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    sku.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="make" className="text-[#BFBFBF] text-sm block">
                                Product Make*
                            </label>
                            <input
                                type="text"
                                name="make"
                                value={make.value}
                                onChange={(e) =>
                                    setMake({ ...make, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    make.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="price" className="text-[#BFBFBF] text-sm block">
                                Price*
                            </label>
                            <input
                                type="number"
                                name="price"
                                min={1000}
                                value={price.value}
                                onChange={(e) =>
                                    setPrice({ ...price, value: parseInt(e.target.value) })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    price.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="discount" className="text-[#BFBFBF] text-sm block">
                                Discount*
                            </label>
                            <input
                                type="number"
                                name="discount"
                                min={1}
                                value={discount.value}
                                onChange={(e) =>
                                    setDiscount({ ...discount, value: parseInt(e.target.value) })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    discount.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="quantity" className="text-[#BFBFBF] text-sm block">
                                Quantity In Stock*
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                min={1}
                                value={quantity.value}
                                onChange={(e) =>
                                    setQuantity({ ...quantity, value: parseInt(e.target.value) })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    quantity.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="description" className="text-[#BFBFBF] text-sm block">
                                Product Description*
                            </label>
                            <textarea
                                name="description"
                                rows={10}
                                value={description.value}
                                onChange={(e) =>
                                    setDescription({ ...description, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    description.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            >

                            </textarea>
                        </div>



                        <div className="my-3 text-center">
                            <button
                                onClick={() => handleSubmit()}
                                className="bg-[#FF9363] text-white py-1 px-10 rounded-2xl"
                            >
                                {loading ? "Processing..." : "Create"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default ProductForm;