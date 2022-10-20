import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

import './style.css';
import { whatsAppUrl } from '../../constant';
import WhatsappButton from '../../components/whatsapp-btn';


const ServicePage = () => {
  return (
    <>
        <Navbar />
        <div>
            <div className="text-center">
                <h3 className='text-2xl font-bold mt-8'>Our Services</h3>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-10/12 mx-auto my-24'>
                <div>
                    <h3 className='text-xl font-bold my-4'>Buy and Sell Bitcoin and other Cryptocurrencies</h3>
                    <p>
                        Bitcoin is a cryptocurrency that is widely recognized and used across various digital payment platforms. It is a widely acceptable means of payment for various products and services.
                        <br />
                        <br />
                        At Generates Group, we provide you with a secured means and seamless process that allows you to receive, transfer and exchange for cash that will be sent into your local bank account immediately.
                        <br />
                        <br />
                        Our Bitcoin and cryptocurrencies to Naira exchange are safe and guaranteed. What we mean is that there is no delay. 
                    </p>
                </div>
                <div className='crypto-wrapper'></div>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-10/12 mx-auto my-24'>
                <div className='gift-wrapper'></div>
                <div>
                    <h3 className='text-xl font-bold my-4'>Gift Card Redemption</h3>
                    <p>
                        Digital assets such as Itunes, Amazon, Google Play, stream, vanilla and all kinds of gift cards become a means of exchange. It is also becoming a widely accepted, fast, and suitable asset for transactional purposes. 
                        <br />
                        <br />
                        At Generates Group, We provide a platform that allows you to instantly exchange various kinds of gift cards and get your money paid instantly to your bank account. We offer the best market rate on the go.
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-10/12 mx-auto my-24'>
                <div>
                    <h3 className='text-xl font-bold my-4'>Buy Personal Protective Equipments</h3>
                    <p>
                        PPE’s are designed to provide protection from serious injuries and or illnesses resulting from contact with chemical, radiological, physical, electrical, mechanical, or other hazards. 
                        <br />
                        <br />
                        At Generates group, we provide you with durable Personal Protective Equipment to prevent employees from hazards. With the best discounts in the market today for protective shoes, booths, jackets, helmets and other equipment.
                    </p>
                </div>
                <div className='stock-wrapper'></div>
            </div>

            <div className="w-full my-16">
            <div className="flex justify-center">
                <div className='text-center'>
                    <p className='text-xl font-normal'>We Trade only on whatsapp.</p>
                    <button className='bg-black rounded-3xl py-3 px-6 mt-5'>
                        <a href={whatsAppUrl} target="_blank" rel='noreferrer' className='text-white'>
                            Get Started
                        </a>
                    </button>
                </div>
            </div>
        </div>
        </div>

        {/* whatsapp */}
        <WhatsappButton />
        <Footer />
    </>
  )
}

export default ServicePage;