import React from 'react'
import { whatsAppUrl } from '../../constant';
import './style.css';

const HeroCardTwo = () => {
  return (
    <>
        <a href={whatsAppUrl} target="_blank" rel='noreferrer' className='text-3xl text-white'>
            <div className='w-full wrapper2'>
            </div>
        </a>
    </>
  )
}

export default HeroCardTwo;