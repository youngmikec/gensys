import React from 'react';

import './style.css';
import { whatsAppUrl } from '../../constant';

const HeroCardThree = () => {

    return (
        <>
            <div className='w-full wrapper3'>
                <div className='text-white w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 lg:ml-28 ml-auto mr-auto py-10'>
                    <h1 className='text-6xl font-bold mb-4'>Trade Fast and Easy</h1>
                    <p>Trade giftcards for cash fast and seamlessly with Generates</p>

                    <button className='py-3 px-8 text-white bg-[#1b1b1b] rounded-3xl my-4 hover:bg-white hover:text-black'>
                        <a href={whatsAppUrl} target="_blank" rel='noreferrer' >Trade now</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeroCardThree;