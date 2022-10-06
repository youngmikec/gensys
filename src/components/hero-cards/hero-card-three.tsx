import React from 'react';

import './style.css';
import { whatsAppUrl } from '../../constant';

const HeroCardThree = () => {

    return (
        <>
            <a href={whatsAppUrl} target="_blank" rel='noreferrer' className='text-3xl text-white'>
                <div className='w-full wrapper3'>
                </div>
            </a>
        </>
    )
}

export default HeroCardThree;