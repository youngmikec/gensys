import React from 'react'

//icons
import haticon from '../../assets/images/hat.png';
import penicon from '../../assets/images/iconpen.png';
import clockicon from '../../assets/images/clock.png';

const Services = () => {
  return (
    <>
        <div className="w-full my-12" id="services">
            <div className="mx-auto w-8/12">
                <div className="text-center mb-6">
                    <p className='text-[#244886] font-normal my-2'>Our Core Services</p>
                    <h3 className='text-3xl font-bold text-[#0F2137]'>
                        These we can do
                        <br />
                        And Many more.
                    </h3>
                </div>

                <div className="grid grid-cols-1 space-x-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    <div>
                        <div className="text-center rounded-lg hover:shadow-lg transition-all p-4">
                            <div className='flex justify-center'>
                                <img src={haticon} alt="hat-icon" width="60rem" height="60rem" className='my-4 hover:rotate-180 transition-all' />
                            </div>
                            <h3 className='font-3xl font-bold my-3 text-[#0F2137]'>Sell Cryptos</h3>
                            <p className='text-[#0F2137]'>
                                Get the best value for your Bitcoin, we give you the most reliable platform to exchange your Bitcoins in whatever volume for cash in local currency.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="text-center rounded-lg hover:shadow-lg transition-all p-4">
                            <div className='flex justify-center'>
                                <img src={penicon} alt="pen-icon"  width="60rem" height="60rem" className='my-4 hover:rotate-180 transition-all' />
                            </div>
                            <h3 className='font-3xl font-bold my-3 text-[#0F2137]'>Sell Giftcards</h3>
                            <p className='text-[#0F2137]'>
                                Sell your iTunes, google play, stream, vanilla and all forms of gift cards easily without stress, receiving your exchange naira value in no time!
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="text-center rounded-lg hover:shadow-lg transition-all p-4">
                            <div className="flex justify-center">
                                <img src={clockicon} alt="clock-icon"  width="60rem" height="60rem" className='my-4 hover:rotate-180 transition-all' />
                            </div>
                            <h3 className='font-3xl font-bold my-3 text-[#0F2137]'>Selling of Gadgets</h3>
                            <p className='text-[#0F2137]'>
                                Look no further, you indeed got to the right place to have your Bitcoin and Gift cards exchange into Cash immediately, just like that!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services;