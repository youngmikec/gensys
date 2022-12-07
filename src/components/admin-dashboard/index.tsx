import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

import Card from '../../shared/card';
import { RETRIEVE_APP_REPORTS } from '../../services';
// import { Transaction } from '../../common';
// import StatusBadge from '../../shared/status-badge';
// import { RETRIEVE_ALL_TRANSACTIONS } from '../../services/transactions';

const AdminDashboard = () => {
    const [recentOrders, setRecentOrders] = useState<any[]>([]);
    const [pendingOrders, setPendingOrders] = useState<number>(0);
    const [declinedOrders, setDeclinedOrders] = useState<number>(0);
    const [completedOrders, setCompletedOrders] = useState<number>(0);
    const [products, setProducts] = useState<number>(0);
    const [users, setUsers] = useState<number>(0);

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

    const retrieveAppReports = () => {
        RETRIEVE_APP_REPORTS().then(res => {
            const { message, payload } = res.data;
            notify('success', message);
            setRecentOrders(payload.recentOrders);
            setPendingOrders(payload.pendingOrders);
            setDeclinedOrders(payload.declinedOrders);
            setCompletedOrders(payload.completedOrders);
            setProducts(payload.products);
            setUsers(payload.users);
        }).catch(err => {
            const { message } = err.response.data;
            notify('error', message);
        });
        
    }

    useEffect(() => {
        retrieveAppReports();
    }, []);

    // useEffect(() => {
    //     sortTransactions();
    // }, [transactions]);

    return (
        <>
            {/* display cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
            >
                <div className='my-2 mr-4'>
                    <Card type='lg'>
                        <div className='text-center py-1 lg:py-3'>
                        <h5 className='my-4 text-sm'>Pending Orders</h5>
                        <h1 className='text-[#6A6A6A] text-3xl lg:text-6xl font-bold'>
                            { pendingOrders }
                        </h1>
                        </div>
                    </Card>
                </div>

                <div className='my-2 mx-3'>
                    <Card type='lg'>
                        <div className='text-center py-1 lg:py-3'>
                        <h5 className='my-4 text-sm'>Completed Orders</h5>
                        <h1 className='text-[#6A6A6A] text-3xl lg:text-6xl font-bold'>
                            { completedOrders }
                        </h1>
                        </div>
                    </Card>
                </div>

                <div className='my-2 mx-3'>
                    <Card type='lg'>
                        <div className='text-center py-1 lg:py-3'>
                        <h5 className='my-4 text-sm'>Total Products</h5>
                        <h1 className='text-[#6A6A6A] text-3xl lg:text-6xl font-bold'>
                            { products }
                        </h1>
                        </div>
                    </Card>
                </div>

                <div className='my-2 ml-3'>
                    <Card type='lg'>
                        <div className='text-center py-1 lg:py-3'>
                        <h5 className='my-4 text-sm'>Total Users</h5>
                        <h1 className='text-[#6A6A6A] text-3xl lg:text-6xl font-bold'>
                            { users }
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
                            {
                                recentOrders.length > 0 ?
                                recentOrders.map((item: any, idx: number) => {
                                    return <tr className='my-4'>
                                        <td className='text-left border-spacing-y-4'>NGN</td>
                                        <td className='text-center py-3 capitalize'>{item?.code}</td>
                                        <td className='text-center py-3'>{item?.productItems.length}</td>
                                        <td className='text-center py-3'>{item?.totalAmount}</td>
                                        <td className='text-center py-3'>{moment(item?.createdAt).format("MM-DD-YYYY")}</td>
                                        <td className='text-center py-3'>
                                            {/* <StatusBadge status={item.status} /> */}
                                            {item?.status}
                                        </td>
                                    </tr>
                                }) :
                                <tr>
                                    <td colSpan={5} className="text-center py-3">No Transactioins available</td>
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

export default AdminDashboard;