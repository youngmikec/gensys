import React from 'react'
import CryptoRate from '../../components/crypto-rate';
import Footer from '../../components/footer';
import GiftCardRate from '../../components/giftcard-rate';
import Navbar from '../../components/navbar';
import WhatsappButton from '../../components/whatsapp-btn';


const Rating = () => {

    return (
        <>
            <Navbar bg='#000000' text='#ffffff' />
            <div className='mx-auto md:w-11/12 lg:w-10/12'> 
                <div className="text-left">
                    <h3 className='text-2xl font-bold mt-8 mb-4'>Rating Calculator</h3>
                    <p className=''>Experience the best available.</p>
                </div>

                <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <CryptoRate />
                    <GiftCardRate />
                </div>
            </div>
            {/* whatsapp */}
            <WhatsappButton />
            <Footer />
        </>
    )
}

export default Rating;