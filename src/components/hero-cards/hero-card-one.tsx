import React from 'react';
import { whatsAppUrl } from '../../constant';

import './style.css';

const HeroCardOne = () => {
  return (
    <>
        {/* <div className='w-full bg-[#058AB3]'>
            <div className='mb-12 pt-16 px-4 text-left md:text-center lg:text-center md:px-12 lg:px-12'>
                <h1 className='font-bold text-white banner-text'>Transport Your Goods Around The World</h1>
                <h1 className='font-bold text-white' style={{fontSize: '3rem'}}>Small enough to care</h1>
            </div>

            <div className='mt-4 text-center'>
                <button className='border-4 border-white bg-transparent text-white text-sm px-2 py-1 lg:text-lg lg:py-4 rounded-lg'>
                    <Link to="/about-us">Read more</Link>
                </button>
            </div>
            
        </div> */}
        <a href={whatsAppUrl} target="_blank" rel='noreferrer' className='text-3xl text-white'>
            <div className='w-full wrapper1'>
            </div>
        </a>
    </>
  )
}

export default HeroCardOne;