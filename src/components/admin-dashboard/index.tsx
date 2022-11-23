import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

import Card from '../../shared/card';
// import { Transaction } from '../../common';
// import StatusBadge from '../../shared/status-badge';
// import { RETRIEVE_ALL_TRANSACTIONS } from '../../services/transactions';

const AdminDashboard = () => {
    // const [transactions, setTransactions] = useState<Transaction[]>([]);
    // const [deposits, setDeposits] = useState<Transaction[]>([]);
    // const [withdrawals, setWithdrawals] = useState<Transaction[]>([]);

    const notify = (type: string, msg: string) => {
        if(type === 'success'){
            toast.success(msg, {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        if(type === 'error'){
            toast.error(msg, {
              position: toast.POSITION.TOP_RIGHT
            }); 
        }
    };

    // const sortTransactions = () => {
    //     let dptArray: Transaction[] = [];
    //     let wthArray: Transaction[] = [];
    //     transactions.forEach((item: Transaction) => {
    //         if(item.transactionType === 'deposit'){
    //             dptArray.push(item);
    //             setDeposits(dptArray);
    //         }else{
    //             wthArray.push(item);
    //             setWithdrawals(wthArray);
    //         }
    //     })
    // }

    // const retrieveTransaction = () => {
    //     RETRIEVE_ALL_TRANSACTIONS().then(res => {
    //         const { message, data } = res.data;
    //         notify('success', message);
    //         setTransactions(data);
    //     }).catch(err => {
    //         const { error } = err.response.data;
    //         notify('error', error)
    //     });
        
    // }

    // useEffect(() => {
    //     retrieveTransaction();
    // }, []);

    // useEffect(() => {
    //     sortTransactions();
    // }, [transactions]);

    return (
        <>
            {/* display cards */}
            <div className="grid grid-cols-1 space-y-2
                sm:grid-cols-2 sm:space-y-0 sm:space-x-6
                md:grid-cols-2 md:space-y-0 md:space-x-6
                lg:grid-cols-2 lg:space-y-0 lg:space-x-6"
            >
                <div className=''>
                <Card type='lg'>
                    <div className='text-center py-6 lg:py-10'>
                    <h5 className='my-4 text-sm'>Pending Orders</h5>
                    <h1 className='text-[#6A6A6A] text-3xl lg:text-6xl font-bold'>
                        50
                    </h1>
                    </div>
                </Card>
                </div>

                <div className=''>
                <Card type='lg'>
                    <div className='text-center py-6 lg:py-10'>
                    <h5 className='my-4 text-sm'>Completed Orders</h5>
                    <h1 className='text-[#6A6A6A] text-3xl lg:text-6xl font-bold'>
                        27
                    </h1>
                    </div>
                </Card>
                </div>
            </div>
            {/* display cards */}

            {/* Transacations */}
            <div className="my-8 grid grid-cols-1">
                <div>
                <Card type='lg'>
                    {/* recent transactions */}
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-2xl font-medium'>Recent History</h3>
                        </div>

                        {/* calendar */}
                        <div className='group'>
                        </div>
                    </div>

                    <div className='overflow-scroll'>
                    <table className='table table-auto w-full mx-auto border-spacing-y-4'>
                        <thead>
                            <tr className='border-spacing-y-4'>
                                <th className='table-caption text-left'>Currency</th>
                                <th>Order code</th>
                                <th>No of items</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className='my-4'>
                                <td className='text-left border-spacing-y-4'>NGN</td>
                                <td className='text-center py-3 capitalize'>#23245fjd</td>
                                <td className='text-center py-3'>3</td>
                                <td className='text-center py-3'>15000</td>
                                {/* <td className='text-center py-3'>{moment(item?.createdAt).format("MM-DD-YYYY")}</td> */}
                                <td className='text-center py-3'>10/11/2022</td>
                                <td className='text-center py-3'>
                                    {/* <StatusBadge status={item.status} /> */}
                                    PENDING
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={5} className="text-center py-3">No Transactioins available</td>
                            </tr>

                        
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

export default AdminDashboard;