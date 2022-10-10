import React from 'react';

import './style.css';
import { whatsAppUrl } from '../../constant';

const HeroCardTwo = () => {
  return (
    <>
      <div className='w-full wrapper2'>
        <div className='text-white  w-4/12 ml-auto mr-28 py-10'>
            <h1 className='text-6xl font-bold mb-4'>Personal Protective Equipments</h1>
            <p>Buy the best PPE's at up 40% discount with Generates</p>

            <button className='py-3 px-8 text-[#1b1b1b] bg-white rounded-3xl my-4 hover:bg-white hover:text-black'>
                <a href={whatsAppUrl} target="_blank" rel='noreferrer' >Buy now</a>
            </button>
        </div>
      </div>
    </>
  )
}

export default HeroCardTwo;