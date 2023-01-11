import React from 'react';

import { BsTagsFill } from 'react-icons/bs';
import { IoIosFlash } from 'react-icons/io';
import { FaRegCreditCard } from 'react-icons/fa';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

//banner images
import bigBanner from '../../assets/images/ppe1.jpg';
import blakFriday from '../../assets/images/products.png';
import blakFriday2 from '../../assets/images/products.png';

import Card from '../card';

function ProductBanners() {

  return (
    <>
        <div className='w-full'>
            <div className="flex justify-between">
                <div className='w-9/12 mr-2 h-full'>
                    <Card type='sm'>
                        <img src={bigBanner} width="100%" height="100%"  alt="big ad banner" />
                    </Card>
                </div>
                <div className='w-3/12 ml-2'>
                    <div className='my-1'>
                        <Card type='sm'>
                            <img src={blakFriday} width="100%" height="100px" alt="black friday" />
                        </Card>
                    </div>
                    <div className='my-1'>
                        <Card type='sm'>
                            <img src={blakFriday2} width="100%" height="100%"  alt="big ad banner" />
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row my-4">
                <div className='mx-1 my-1'>
                    <Card type='sm'>
                        <div className="flex justify-start">
                            <div className="mx-1 pt-1">
                                <BsTagsFill className="text-black" />
                            </div>
                            <div className='mx-1'>
                                <h4 className='font-semibold text-lg'>Low Prices</h4>
                                <p className='text-sm text-justify text-[#8c8c8c]'>Enjoy low prices on all your PPE’s</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='mx-1 my-1'>
                    <Card type='sm'>
                        <div className="flex justify-start">
                            <div className="mx-1 pt-1">
                                <AiOutlineSafetyCertificate className="text-black" />
                            </div>
                            <div className='mx-1'>
                                <h4 className='font-semibold text-lg'>Safe</h4>
                                <p className='text-sm text-justify text-[#8c8c8c]'>Enjoy low prices on all your PPE’s</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='mx-1 my-1'>
                    <Card type='sm'>
                        <div className="flex justify-start">
                            <div className="mx-1 pt-1">
                                <FaRegCreditCard className="text-black" />
                            </div>
                            <div className='mx-1'>
                                <h4 className='font-semibold text-lg'>Fast Payment</h4>
                                <p className='text-sm text-justify text-[#8c8c8c]'>Enjoy low prices on all your PPE’s</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='mx-1 my-1'>
                    <Card type='sm'>
                        <div className="flex justify-start">
                            <div className="mx-1 pt-1">
                                <IoIosFlash className="text-black" />
                            </div>
                            <div className='mx-1'>
                                <h4 className='font-semibold text-lg'>Quick Response</h4>
                                <p className='text-sm text-justify text-[#8c8c8c]'>Enjoy low prices on all your PPE’s</p>
                            </div>
                        </div>
                    </Card>
                </div>

                
            </div>
        </div>
    </>
  )
}

export default ProductBanners;