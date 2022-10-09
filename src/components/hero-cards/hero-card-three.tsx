import React from 'react';

import './style.css';
import { whatsAppUrl } from '../../constant';

const HeroCardThree = () => {

    return (
        <>
            <div className='w-full wrapper3'>
                <div className='text-white w-4/12 ml-28 mr-auto py-10'>
                    <h1 className='text-6xl font-bold mb-4'>The Best Market Value ON The Go</h1>
                    <p>Buy and Sell crypto with the best exchanger</p>

                    <button className='py-3 px-8 text-white bg-[#1b1b1b] rounded-3xl my-4 hover:bg-white hover:text-black'>
                        <a href={whatsAppUrl} target="_blank" rel='noreferrer' >Buy now</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeroCardThree;