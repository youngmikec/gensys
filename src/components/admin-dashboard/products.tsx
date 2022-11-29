import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';
import moment from "moment";

//icons
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineArrowUp } from 'react-icons/ai';
import defaultImage from '../../assets/images/pic.jpg';

import Card from '../../shared/card';
import { ApiResponse, Product } from '../../model';
import { RETRIEVE_PRODUCTS } from '../../services';
import { sortArray } from '../../utils';
import { INITIALIZE_PRODUCTS } from '../../store/products';


function AdminProductsComp() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState<Product[]>([]);

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

    const sortData = (field: string) => {
        const sortedArray: any[] = sortArray(products, field);
        if (sortedArray.length > 0) {
          setProducts(sortedArray);
        }
      };
    
      useEffect(() => {
        retrieveProducts();
      }, []);

    return (
        <>
            <div className="my-8 grid grid-cols-1">
            <div>
            <Card type="lg">
                {/* recent transactions */}
                <div className="flex justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-medium">Products</h3>
                </div>

                {/* calendar */}
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

                <div className="overflow-x-scroll p-4">
                <table className="table table-auto w-full mx-auto border-spacing-y-4">
                    <thead>
                    <tr className="border-spacing-y-4">
                        <th className="table-caption text-left">Code</th>
                        <th>Name</th>
                        <th>Sku</th>
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
                            <td className="text-center py-3 capitalize">
                                {item?.sku}
                            </td>
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
                                    {/* {item.userType === "USER" && (
                                    <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap hover:text-white rounded-md text-sm md:text-base ">
                                        <span
                                        className="items-left px-2 py-3"
                                        onClick={() =>
                                            handleUserUpgrade(item.id, "editor")
                                        }
                                        >
                                        Upgrade Editor
                                        </span>
                                    </li>
                                    )} */}

                                    {/* {item.userType === "Admin" && (
                                        <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap rounded-md hover:text-white text-sm md:text-base ">
                                            <span
                                            className="items-left px-2 py-2"
                                            onClick={() =>
                                                handleUserUpgrade(item.id, "user")
                                            }
                                            >
                                            Downgrade User
                                            </span>
                                        </li>
                                    )} */}

                                    <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap rounded-md hover:text-white text-sm md:text-base ">
                                    <span className="items-left px-2 py-2">
                                        <Link to={`${item.id}`}>View Detail</Link>
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

        <ToastContainer />
        </>
    )
}

export default AdminProductsComp;