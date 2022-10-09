import React from 'react';
import { whatsAppUrl } from '../../constant';

import './style.css';

const HeroCardOne = () => {
  return (
    <>
        <div className='w-full wrapper1'>
            <div className='text-white w-4/12 ml-28 mr-auto py-10'>
                <h1 className='text-6xl font-bold mb-4'>The Best Market Value ON The Go</h1>
                <p>Buy and Sell crypto with the best exchanger</p>

                <button className='py-3 px-8 text-white bg-[#1b1b1b] rounded-3xl my-4 hover:bg-white hover:text-black'>
                    <a href={whatsAppUrl} target="_blank" rel='noreferrer' >Buy now</a>
                </button>
            </div>
            {/* <div style={{width: "100%", height: 0, paddingBottom: '100%', position: 'relative'}}>
                <iframe title='iframe' src="https://giphy.com/embed/niy4wlySGK94i9qS48" width="100%" height="100%" style={{position: 'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
            <p>
                <a href="https://giphy.com/stickers/digitalpratik-bitcoin-crypto-digital-pratik-niy4wlySGK94i9qS48">via GIPHY</a>
            </p> */}
        </div>
    </>
  )
}

export default HeroCardOne;