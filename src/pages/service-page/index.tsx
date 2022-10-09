import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import './style.css';

const ServicePage = () => {
  return (
    <>
        <Navbar />
        <div>
            <div className="text-center">
                <h3 className='text-2xl font-bold mt-8'>Our Services</h3>
            </div>

            <div className='grid grid-cols-2 w-10/12 mx-auto my-24'>
                <div>
                    <h3 className='text-xl font-bold my-4'>Sell Bitcoin</h3>
                    <p>
                        Bitcoin is a cryptocurrency that is widely recognized and used across various digital payment platforms. It is a widely acceptable means of payment for various products and services.
                        <br />
                        <br />
                        At Apex Network, we provide you with a secured wallet and easy-to-use system that allows you to deposit, transfer and exchange for cash that you can withdraw into your local bank account immediately.
                        <br />
                        <br />

                        Our Bitcoin to Naira exchange is automatic. What we mean is that there is no wait time.
                    </p>
                </div>
                <div className='crypto-wrapper'></div>
            </div>
            
            <div className='grid grid-cols-2 w-10/12 mx-auto my-24'>
                <div className='gift-wrapper'></div>
                <div>
                    <h3 className='text-xl font-bold my-4'>Gift Card Redemption</h3>
                    <p>
                        Bitcoin is a cryptocurrency that is widely recognized and used across various digital payment platforms. It is a widely acceptable means of payment for various products and services.
                        <br />
                        <br />
                        At Apex Network, we provide you with a secured wallet and easy-to-use system that allows you to deposit, transfer and exchange for cash that you can withdraw into your local bank account immediately.
                        <br />
                        <br />

                        Our Bitcoin to Naira exchange is automatic. What we mean is that there is no wait time.
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-2 w-10/12 mx-auto my-24'>
                <div>
                    <h3 className='text-xl font-bold my-4'>PeP Stock Sales</h3>
                    <p>
                        Bitcoin is a cryptocurrency that is widely recognized and used across various digital payment platforms. It is a widely acceptable means of payment for various products and services.
                        <br />
                        <br />
                        At Apex Network, we provide you with a secured wallet and easy-to-use system that allows you to deposit, transfer and exchange for cash that you can withdraw into your local bank account immediately.
                        <br />
                        <br />

                        Our Bitcoin to Naira exchange is automatic. What we mean is that there is no wait time.
                    </p>
                </div>
                <div className='stock-wrapper'></div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ServicePage;