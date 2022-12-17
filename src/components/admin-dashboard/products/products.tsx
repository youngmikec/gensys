import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import moment from "moment";

//icons
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineArrowUp, AiOutlinePlus } from 'react-icons/ai';

import Card from '../../../shared/card';
import { ApiResponse, Category, Product } from '../../../model';
import { DELETE_PRODUCT, RETRIEVE_CATEGORIES, RETRIEVE_PRODUCTS } from '../../../services';
import { sortArray } from '../../../utils';
import { INITIALIZE_PRODUCTS, REMOVE_PRODUCT } from '../../../store/products';
import AppModalComp from '../../../shared/app-modal';
import { CloseAppModal, OpenAppModal } from '../../../store/modal';
import ProductForm from './product-form';
import { RootState } from '../../../store';
import ProductUpdateForm from './product-update-form';
import DeleteComp from '../delete-comp/delete-comp';


function AdminProductsComp() {
    const dispatch = useDispatch();
    const Products: Product[] = useSelector((state: RootState) => state.productsState.value);

    const [deleting, setDeleting] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [currentProduct, setCurrentProduct] = useState<Product | undefined>();
    const [categories, setCategories] = useState<Category[]>([]);
    const [modalMode, setModalMode] = useState<string>('');

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

    const retrieveProducts = () => {
        const query: string = `?sort=-createdAt&populate=category,supplier`;
        RETRIEVE_PRODUCTS(query)
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload } = res.data;
            notify("success", message);
            setProducts(payload);
            dispatch(INITIALIZE_PRODUCTS(payload));
        })
        .catch((err: any) => {
            const { message } = err.response.data;
            notify("error", message);
        });
    };

    const retrieveCategories = () => {
        RETRIEVE_CATEGORIES()
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload } = res.data;
            notify("success", message);
            setCategories(payload);
        })
        .catch((err: any) => {
            const { message } = err.response.data;
            notify("error", message);
        });
    };

    const sortData = (field: string) => {
        const sortedArray: any[] = sortArray(products, field);
        if (sortedArray.length > 0) {
          setProducts(sortedArray);
        }
    };

    // Open product modal
    const openModal = (mode: string = 'create', id: string = '') => {
        setModalMode(mode);
        dispatch(OpenAppModal());
    }

    // Delete product
    const handleDeleteRecord = (id: string) => {
        setDeleting(true);
        DELETE_PRODUCT(id)
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload, success } = res.data;
            if(success){
                setDeleting(false);
                notify("success", message);
                dispatch(REMOVE_PRODUCT(payload.id));
                dispatch(CloseAppModal());
            }
        })
        .catch((err: any) => {
            setDeleting(false);
            const { message } = err.response.data;
            notify("error", message);
        });
    }
    
    useEffect(() => {
        retrieveProducts();
        retrieveCategories();
    }, []);

    useEffect(() => {
        setProducts(Products)
    }, [Products]);


    return (
        <>
            <div className="my-8 grid grid-cols-1">
            <div>
            <Card type="lg">
                {/* Card Title */}
                <div className="flex justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-medium">Products</h3>
                    </div>

                    
                    <div className="group">
                        <div
                        className="relative mx-1 px-1 py-2 group  mb-1 md:mb-0"
                        id="button_pm"
                        >
                        {/* <span className="firstlevel hover:text-red-500 whitespace-no-wrap text-gray-600 hover:text-blue-800"
                                            >
                                                <BiEditAlt className="text-blue hover:cursor-pointer inline" />
                                            </span> */}
                        <div
                            className="bg-[#494949] text-white py-0 lg:py-1 px-2 lg:px-3
                            rounded-l-none rounded-r-3xl rounded-b-3xl hover:cursor-pointer inline-block"
                        >
                            <span className="mx-2 inline text-sm">Sort by</span>
                            <AiOutlineArrowUp className="text-white inline-block" />
                        </div>
                        <ul className=" absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-[#F6F6F6] z-0 hidden group-hover:block">
                            <svg
                            className="block fill-current text-[#F6F6F6] w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            >
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            </svg>
                            <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap hover:text-white rounded-md text-sm md:text-base ">
                            <span
                                className="items-left px-2 py-3"
                                onClick={() => sortData("createdAt")}
                            >
                                By Date
                            </span>
                            </li>
                            <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap rounded-md hover:text-white text-sm md:text-base ">
                            <span
                                className="items-left px-2 py-2"
                                onClick={() => sortData("name")}
                            >
                                Alphabetically
                            </span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                
                {/* filter section */}
                <div className="flex justify-between mb-6">
                    <div>
                        <button 
                            onClick={() => openModal('create')}
                            className='rounded-lg py-3 px-4 text-center
                            bg-[#e9e9e9] text-[#8c8c8c] text-sm
                            hover:bg-[#FF9363] hover:text-white 
                            '
                        >
                            <AiOutlinePlus className="inline mx-2 text-lg" />
                            Create Product
                        </button>
                    </div>
                    <div></div>
                </div>
                <hr />

                {/* Table Content */}
                <div className="overflow-x-scroll p-4">
                    <table className="table table-auto w-full mx-auto border-spacing-y-4">
                        <thead>
                        <tr className="border-spacing-y-4">
                            <th className="table-caption text-left">Code</th>
                            <th>Name</th>
                            {/* <th>Sku</th> */}
                            <th>Category</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Date Created</th>
                            <th>Action</th>
                        </tr>
                        </thead>

                        <tbody>
                        {   products.length > 0 ?
                            products.map((item: Product, key: number) => {
                            return (
                                <tr key={key} className="my-4">
                                <td className="text-left border-spacing-y-4">
                                    {item?.code}
                                </td>
                                <td className="text-center py-3 capitalize">
                                    {item?.name}
                                </td>
                                {/* <td className="text-center py-3 capitalize">
                                    {item?.sku}
                                </td> */}
                                <td className="text-center py-3 capitalize">
                                    {item?.category?.name}
                                </td>
                                <td className="text-center py-3 capitalize">
                                    {item?.price}
                                </td>
                                <td className="text-center py-3 capitalize">
                                    {item?.discount}
                                </td>
                                <td className="text-center py-3">
                                    {moment(item?.createdAt).format("MM-DD-YYYY")}
                                </td>
                                <td className="text-center py-3">
                                    <div
                                    className="relative mx-1 px-1 py-2 group  mb-1 md:mb-0"
                                    id="button_pm"
                                    >
                                    <span className="firstlevel hover:text-red-500 whitespace-no-wrap text-gray-600 hover:text-blue-800">
                                        <BiEditAlt className="text-blue hover:cursor-pointer inline" />
                                    </span>
                                    <ul className="w-max absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-[#F6F6F6] z-10 hidden group-hover:block">
                                        <svg
                                        className="block fill-current text-[#F6F6F6] w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        >
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                        </svg>
                                        
                                        <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap rounded-md hover:text-white text-sm md:text-base ">
                                            <span className="items-left px-2 py-2">
                                                <Link to={`/crm-products/${item.id}`}>View Detail</Link>
                                            </span>
                                        </li>
                                        <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap rounded-md hover:text-white text-sm md:text-base ">
                                            <span 
                                                className="items-left px-2 py-2"
                                                onClick={() => {
                                                    setCurrentProduct(item)
                                                    openModal('update')
                                                }}
                                            >
                                                Update Product
                                            </span>
                                        </li>
                                        <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap rounded-md hover:text-white text-sm md:text-base ">
                                            <span 
                                                className="items-left px-2 py-2"
                                                onClick={() => {
                                                    setCurrentProduct(item)
                                                    openModal('delete')
                                                }}
                                            >
                                                Delete Product
                                            </span>
                                        </li>
                                    </ul>
                                    </div>
                                </td>
                                </tr>
                            );
                            }) :

                            <tr>
                            <td colSpan={5} className="text-center py-3">No Product Record available</td>
                            </tr>
                        }
                        </tbody>
                    </table>
                </div>
            </Card>
            </div>
        </div>

        <AppModalComp title=''>
            {
                modalMode === 'create' && <ProductForm categories={categories} />
            }
            {
                modalMode === 'update' && <ProductUpdateForm categories={categories} product={currentProduct} />
            }
            {
                modalMode === 'delete' && <DeleteComp id={currentProduct?.id} action={handleDeleteRecord} deleting={deleting} />
            }
            </AppModalComp>

            <ToastContainer />
        </>
    )
}

export default AdminProductsComp;