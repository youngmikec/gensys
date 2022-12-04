import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import { FaBtc } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { RiDashboardFill } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../../assets/images/logo-orange.png';

//icons
import { getItem } from "../../utils";


type Props = {
    sidebarMenus?: any[]
}

const Sidebar = ({sidebarMenus}: Props) => {
    const location = useLocation();
    const [role, setRole] = useState<string>('');

    useEffect(() => {
        const { user } = getItem('auth');
        if(user && user.role) setRole(user.role);
    }, []);

    return (
        <>
            <div className="bg-white min-h-screen max-h-fit px-4 py-5">
                <div className="my-4">
                    <img src={logo} width="100px" height="100px" alt="logo" />
                </div>
                <ul className="list-none">
                    
                    <li 
                        title="Dashboard"
                        className={ `my-6 py-3 px-4 text-left rounded-lg ${location.pathname === "/dashboard" ? "bg-[#FF9363] text-white" : "bg-[#f1f1f1] text-[#757575]"}`} 
                    >
                        <Link to="/dashboard" className="inline-flex">
                            <RiDashboardFill />
                            <span className="inline-flex mx-2">Dashboard</span>
                        </Link>
                    </li>
                    <li 
                        title="Categories"
                        className={ `my-6 py-3 px-4 text-left rounded-lg ${location.pathname === "/categories" ? "bg-[#FF9363] text-white" : "bg-[#f1f1f1] text-[#757575]"}`}  
                    >
                        <Link to="/categories" className="inline-flex">
                            <BiCategoryAlt />
                            <span className="inline-flex mx-2">Categories</span>
                        </Link>
                    </li>
                    <li 
                        title="Products"
                        className={ `my-6 py-3 px-4 text-left rounded-lg ${location.pathname === "/crm-products" ? "bg-[#FF9363] text-white" : "bg-[#f1f1f1] text-[#757575]"}`}  
                    >
                        <Link to="/crm-products" className="inline-flex">
                            <BsBoxSeam />
                            <span className="inline-flex mx-2">Products</span>
                        </Link>
                    </li>
                    <li 
                        title="Orders"
                        className={ `my-6 py-3 px-4 text-left rounded-lg ${location.pathname === "/orders" ? "bg-[#FF9363] text-white" : "bg-[#f1f1f1] text-[#757575]"}`}  
                    >
                        <Link to="/orders" className="inline-flex">
                            <AiOutlineShoppingCart />
                            <span className="inline-flex mx-2">Orders</span>
                        </Link>
                    </li>
                    <li 
                        title="Cryptocurrency"
                        className={ `my-6 py-3 px-4 text-left rounded-lg ${location.pathname === "/cryptos" ? "bg-[#FF9363] text-white" : "bg-[#f1f1f1] text-[#757575]"}`}  
                    >
                        <Link to="/cryptos" className="inline-flex">
                            <FaBtc />
                            <span className="inline-flex mx-2">Cryptocurrency</span>
                        </Link>
                    </li>
                    <li 
                        title="Users"
                        className={ `my-6 py-3 px-4 text-left rounded-lg ${location.pathname === "/users" ? "bg-[#FF9363] text-white" : "bg-[#f1f1f1] text-[#757575]"}`}  
                    >
                        <Link to="/users" className="inline-flex">
                            <FiUsers />
                            <span className="inline-flex mx-2">Users</span>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}

export default Sidebar;