import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

import logo from '../../assets/images/logo-redesign.jpeg';

const Footer = () => {
  return (
    <>
        <div className='bg-black text-white w-full py-9 mb-0'>
            <div className='w-8/12 mx-auto'>
                <div className="mx-auto grid grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 lg:space-x-4"
                >
                    <div>
                        <div className='mb-0'>
                            <img src={logo} alt="logo" />
                        </div>
    
                        <div>
                            <div className='flex justify-center'>
                                <div className='inline-block mx-2'>
                                    <a 
                                        href="https://www.facebook.com/generatesgroup" 
                                        target="_blank" 
                                        rel='noreferrer'>
                                        <FaFacebookF className='text-[#FF9363]' width='40px' height='40px'/>
                                    </a>
                                </div>
                                <div className='inline-block mx-2'>
                                    <a href="https://www.instagram.com/generatesgroup/" target="_blank" rel='noreferrer'>
                                        <BsTwitter className='text-[#FF9363]' width='40px' height='40px' />
                                    </a>
                                </div>
                                <div className='inline-block mx-2'>
                                    <a href="https://www.instagram.com/generatesgroup/" target="_blank" rel='noreferrer'>
                                        <AiOutlineInstagram className='text-[#FF9363]' width='40px' height='40px' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-white text-2xl font-semibold sub-title' style={{fontWeight: 'bolder'}}>Products</h1>
                        <ul className='list-none'>
                            <li className='list-item my-4 text-gray-300 hover:text-[#FF9363] cursor-pointer'>
                                <Link to="/services">Selling of cypto currenies</Link>
                            </li>
                            <li className='list-item my-4 text-gray-300 hover:text-[#FF9363] cursor-pointer'>
                                <Link to="/services">Selling of gift cards</Link>
                            </li>
                            <li className='list-item my-4 text-gray-300 hover:text-[#FF9363] cursor-pointer'>
                                <Link to="/services">Sellings of Gadgets</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='text-white text-2xl font-semibold sub-title' style={{fontWeight: 'bolder'}}>Company</h1>
                        <ul className='list-none'>
                            <li className='list-item my-4 text-gray-300 hover:text-[#FF9363] cursor-pointer'>
                                <Link to="/services">About Genesys Exchange</Link>
                            </li>
                            <li className='list-item my-4 text-gray-300 hover:text-[#FF9363] cursor-pointer'>
                                <Link to="/services">Blog</Link>
                            </li>
                            <li className='list-item my-4 text-gray-300 hover:text-[#FF9363] cursor-pointer'>
                                <Link to="/services">Be in touch</Link>
                            </li>
                        </ul>
                    </div>

    
                </div>

                <hr />
                <div className='flex justify-between text-white'>
                    <div>
                        <p>Copy Rights © 2022, Genesys. All right reserved</p>
                    </div>
                    <div>
                        <p><span className='hover:text-[#FF9363]'> Terms and Conditions </span> | <span className='hover:text-[#FF9363]'> Privacy Policies </span></p>
                    </div>
                    
                </div>
            </div>

        </div>
    </>
  )
}

export default Footer;