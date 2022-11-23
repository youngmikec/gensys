import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaBtc } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { RiDashboardFill } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';

//icons
import profile from "../../assets/images/profile.png";
import { getItem } from "../../utils";
// import { RETRIEVE_USER_PROFILE } from "../../services";

const Topbar = () => {
  const location = useLocation();
  const [role, setRole] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [showSideBar, setShowSidebar] = useState<boolean>(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => setShowSidebar(false);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("clientId");
    localStorage.removeItem("clientToken");
    localStorage.removeItem("plan");
    window.location.href = "/sign-in";
  };

//   const retrieveProfile = () => {
//     RETRIEVE_USER_PROFILE()
//       .then((res) => {
//         const { data } = res.data;
//         setUsername(data.lastname);
//       })
//       .catch((err) => {
//         const { error } = err.response.data;
//         console.log(error);
//       });
//   };

  useEffect(() => {
    const { user } = getItem("auth");
    if (user && user.role) {
      setRole(user.role);
    }
  }, []);

  useEffect(() => {
    // retrieveProfile();
  }, []);

  return (
    <>
      <div className="flex justify-between py-5">
        <div
          className="block sm:hidden md:hidden lg:hidden pt-3"
          onClick={() => openSidebar()}
        >
          <FiMenu />
        </div>

        <div>
          <h3 className="text-lg sm:text-lg md:text-xl lg:text-xl mt-2">
            Welcome <span className="font-bold">{username}</span>
          </h3>
        </div>

        <div className="flex items-center">
          <div
            className="mx-4 sm:mx-5 md:mx-7 lg:mx-8 inline-flex cursor-pointer"
            title="Log out"
          >
            <span onClick={() => handleLogout()}>
              <BiLogOut className="text-2xl font-medium" />
            </span>
          </div>
          <div
            className="inline-flex bg-black rounded-full overflow-hidden"
            title="Profile"
          >
            <Link to="/profile">
              <img
                src={profile}
                width="40px"
                height="40px"
                className=" cursor-pointer shadow-sm"
                alt="profile"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* style={customeStyle.sidebar} */}

      <div className={`${showSideBar ? "block" : "hidden"} absolute left-0 top-0 bottom-0 h-full
            bg-[#969696a8] text-left w-full px-8 py-4 z-200`}>
        <div
          style={{zIndex: 250}}
          className={`
            absolute left-0 top-0 bottom-0 h-full
            bg-white text-left w-8/12 px-8 py-4 z-200
            `}
        >
          <div className="bg-white">
            <div className="container text-right">
              <button
                className="text-black text-xl"
                onClick={() => closeSidebar()}
              >
                <FaTimes />
              </button>
              
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
                    className={ `my-6 py-3 px-4 text-left rounded-lg ${location.pathname === "/products" ? "bg-[#FF9363] text-white" : "bg-[#f1f1f1] text-[#757575]"}`}  
                >
                    <Link to="/products" className="inline-flex">
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
                    className={ `my-6 py-3 px-4 text-left rounded-lg ${location.pathname === "/crypto" ? "bg-[#FF9363] text-white" : "bg-[#f1f1f1] text-[#757575]"}`}  
                >
                    <Link to="/crypto" className="inline-flex">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
