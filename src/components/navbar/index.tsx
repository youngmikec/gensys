import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/images/logo-redesign.jpeg';

type Props = {
  bg?: string;
  text?: string;
}

const Navbar = ({bg, text}: Props) => {
    const [show, setShow] = useState(false);
    const toggleShowDrowdown = () => {
        setShow(!show);
    }

    return (
      <>
        <div className='bg-black w-full'>
          <div className='hidden sm:hidden md:flex lg:flex mx-auto w-12/12 sm:w-full md:w-10/12 lg:w-10/12 justify-between'>
            <div className='hidden sm:block md:block lg:block'>
              <img src={logo} alt="logo" width="170px" height="170px" />
            </div>
            <div className='pt-6 flex justify-between'>
              <img src={logo} alt="logo" className='sm:hidden md:hidden lg:hidden' width="90px" height="90px" />
              <ul className='list-none'>
                <li className='mx-6 inline text-lg text-white hover:text-[#FF9363]'><Link to="/">Home</Link></li>
                <li className='mx-6 inline text-lg text-white hover:text-[#FF9363]'><Link to="/services">Services</Link></li>
                <li className='mx-6 inline text-lg text-white hover:text-[#FF9363]'><Link to="/rating">Rates</Link></li>
                <li className='mx-6 inline text-lg text-white hover:text-[#FF9363]'><Link to="/products">Products</Link></li>
                <li className='mx-6 inline text-lg text-white hover:text-[#FF9363]'><Link to="/sign-in">Sign in</Link></li>
                {/* <li className='mx-6 inline text-lg text-white hover:text-[#FF9363]'>
                  <Link to="/cart">
                    <IoCartOutline className='inline mx-1' /> Cart
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          {/* mobile view */}
          <div className="block sm:block md:hidden lg:hidden dropdownmenu mx-auto w-11/12">
              <div className='flex justify-between'>
                  <div className="mt-5" style={{width: '15%'}}>
                      <img src={logo} style={{width: '100%'}} alt="logo" />
                  </div>
                  <div className="flex justify-center">
                      <div>
                          <div className='pt-4 dropdown relative'>
                              <button className="
                                  dropdown-toggle
                                  px-6
                                  py-2.5
                                  text-white hover:border-b-2 hove                     font-medium
                                  font-lg
                                  leading-tight
                                  uppercase
                                  rounded
                                  hover:bg-white hover:shadow-lg hover:text-[#8652A4]
                                  focus:bg-white focus:text-[#8652A4] focus:shadow-lg focus:outline-none focus:ring-0
                                  active:bg-white active:shadow-lg active:text-[#8652A4]
                                  transition
                                  duration-150
                                  ease-in-out
                                  flex
                                  items-center
                                  whitespace-nowrap
                                  "
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="true"
                                  onClick={() => toggleShowDrowdown()}
                              >
                              <span className='font-lg'>
                                  <FiMenu />
                              </span>
                          
                              </button>
                              <ul
                                  className={`dropdown-menu
                                  min-w-6
                                  absolute
                                  ${show ? 'block' : 'hidden'}
                                  bg-white
                                  text-base
                                  z-50
                                  py-2
                                  list-none
                                  text-left
                                  rounded-lg
                                  shadow-lg
                                  mt-1
                                  m-0
                                  bg-clip-padding
                                  border-none
                                  "`}
                                  aria-labelledby="dropdownMenuButton1"
                                  id='dropdownMenuButton1'
                              >
                                  <li>
                                      <a
                                      className="
                                      dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-[#8652A4]
                                      hover:bg-gray-100
                                      "
                                      href='/'
                                      >Home</a>
                                  </li>
                                  <li className='mx-4 text-white font-semibold hover:border-b-2 hover:border-b-white'><Link to="/">Home</Link></li>
                                  
                                  <li>
                                      <a
                                      className="
                                      dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-[#8652A4]
                                      hover:bg-gray-100
                                      "
                                      href="/about-us"
                                      >About us</a>
                                  </li>
                                  <li>
                                      <a
                                      className="
                                      dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-[#8652A4]
                                      hover:bg-gray-100
                                      "
                                      href='/contact-us'
                                      >Contact Us</a>
                                  </li>
                                  <li>
                                      <a
                                      className="
                                      dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-[#8652A4]
                                      hover:bg-gray-100
                                      "
                                      href='/faqs'
                                      >FAQS</a>
                                  </li>
                                  <li>
                                      <a
                                      className="
                                      dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-[#8652A4]
                                      hover:bg-gray-100
                                      "
                                      href='/sign-in'
                                      >Sign In</a>
                                  </li>
                                  <li>
                                      <a
                                      className="
                                      dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-[#8652A4]
                                      hover:bg-gray-100
                                      "
                                      href='/sign-up'
                                      >Sign Up</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* mobile view */}
        </div>
      </>
    )
}

export default Navbar;