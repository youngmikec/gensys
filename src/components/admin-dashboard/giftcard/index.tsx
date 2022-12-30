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
import defaultImage from '../../../assets/images/pic.jpg';

import Card from '../../../shared/card';
import { sortArray } from '../../../utils';
import { ApiResponse, CryptoCurrency } from '../../../model';
import { DELETE_CRYPTO, RETRIEVE_CRYPTOS } from '../../../services';
import { INITIALIZE_PRODUCTS } from '../../../store/products';
import AppModalComp from '../../../shared/app-modal';
import { CloseAppModal, OpenAppModal } from '../../../store/modal';
import { RootState } from '../../../store';
import DeleteComp from '../delete-comp/delete-comp';
import { REMOVE_CRYPTO } from '../../../store/cryptos';
import GiftcardForm from './giftcard-form';
import GiftcardUpdateForm from './giftcard-update-form';


function AdminGiftcardComp() {
    const dispatch = useDispatch();
    const cryptoCurrencies: CryptoCurrency[] = useSelector((state: RootState) => state.cryptosState.value);

    const [deleting, setDeleting] = useState<boolean>(false);
    const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);
    const [selectedCrypto, setSelectedCrypto] = useState<CryptoCurrency | undefined>();
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

    const retrieveCryptos = () => {
        const query: string = `?sort=-createdAt`;
        RETRIEVE_CRYPTOS(query)
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload } = res.data;
            notify("success", message);
            setCryptos(payload);
            dispatch(INITIALIZE_PRODUCTS(payload));
        })
        .catch((err: any) => {
            const { message } = err.response.data;
            notify("error", message);
        });
    };

    const sortData = (field: string) => {
        const sortedArray: any[] = sortArray(cryptos, field);
        if (sortedArray.length > 0) {
          setCryptos(sortedArray);
        }
    };

    const openCryptoModal = (mode: string = 'create', id: string = '') => {
        setModalMode(mode);
        dispatch(OpenAppModal());
    }

    const handleDeleteRecord = (id: string) => {
        setDeleting(true);
        DELETE_CRYPTO(id)
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload, success } = res.data;
            if(success){
                setDeleting(false);
                notify("success", message);
                dispatch(REMOVE_CRYPTO(payload.id));
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
        retrieveCryptos();
    }, []);

    useEffect(() => {
        setCryptos(cryptoCurrencies)
    }, [cryptoCurrencies]);

    return (
        <>
            <div className="my-8 grid grid-cols-1">
            <div>
            <Card type="lg">
                {/* Card Title */}
                <div className="flex justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-medium">Giftcards</h3>
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
                            onClick={() => openCryptoModal('create')}
                            className='rounded-lg py-3 px-4 text-center
                            bg-[#e9e9e9] text-[#8c8c8c] text-sm
                            hover:bg-[#FF9363] hover:text-white 
                            '
                        >
                            <AiOutlinePlus className="inline mx-2 text-lg" />
                            Create giftcard
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
                            <th>ShortName</th>
                            <th>image</th>
                            <th>Rate</th>
                            <th>Date Created</th>
                            <th>Action</th>
                        </tr>
                        </thead>

                        <tbody>
                        {   cryptos.length > 0 ?
                            cryptos.map((item: CryptoCurrency, key: number) => {
                            return (
                                <tr key={key} className="my-4">
                                <td className="text-left border-spacing-y-4">
                                    {item?.code}
                                </td>
                                <td className="text-center py-3 capitalize">
                                    {item?.name}
                                </td>
                                <td className="text-center py-3 capitalize">
                                    {item?.shortName}
                                </td>
                                <td className="text-center py-3 capitalize">
                                    <img className='rounded-md' src={item.cryptoImage || defaultImage} width="25px" height="25px" alt="cryptocurrency" />
                                </td>
                                <td className="text-center py-3 capitalize">
                                    <span className='line-through'>N</span> {item?.rate}
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
                                            <span 
                                                className="items-left px-2 py-2"
                                            >
                                                <Link to={``}>View Detail</Link>
                                            </span>
                                        </li>

                                        <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap rounded-md hover:text-white text-sm md:text-base ">
                                            <span 
                                                className="items-left px-2 py-2"
                                                onClick={() => {
                                                    setSelectedCrypto(item)
                                                    openCryptoModal('update');
                                                }}
                                            >
                                                Update Crypto
                                            </span>
                                        </li>
                                        <li className="hover:bg-[#FF971D] hover:cursor-pointer pr-10 p-1 whitespace-no-wrap rounded-md hover:text-white text-sm md:text-base ">
                                            <span 
                                                className="items-left px-2 py-2"
                                                onClick={() => {
                                                    setSelectedCrypto(item)
                                                    openCryptoModal('delete');
                                                }}
                                            >
                                                Delete Crypto
                                            </span>
                                        </li>
                                    </ul>
                                    </div>
                                </td>
                                </tr>
                            );
                            }) :

                            <tr>
                            <td colSpan={5} className="text-center py-3">No Crypto Record available</td>
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
                modalMode === 'create' && <GiftcardForm />
            }
            {
                modalMode === 'view' && <div>welcome to view product modal</div>
            }
            {
                modalMode === 'update' && <GiftcardUpdateForm crypto={selectedCrypto}  />
            }
            {
                modalMode === 'delete' && <DeleteComp id={selectedCrypto?.id} action={handleDeleteRecord} deleting={deleting} />
            }
        </AppModalComp>

        <ToastContainer />
        </>
    )
}

export default AdminGiftcardComp;