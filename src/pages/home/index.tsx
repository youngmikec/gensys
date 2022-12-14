import React from 'react';

// Swiper
import { A11y, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';


// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// components
import Footer from '../../components/footer';
import WhatsappButton from '../../components/whatsapp-btn';
import HeroCardOne from '../../components/hero-cards/hero-card-one';
import HeroCardTwo from '../../components/hero-cards/hero-card-two';
import HeroCardThree from '../../components/hero-cards/hero-card-three';
import { whatsAppUrl } from '../../constant';
import Services from '../../components/services';
import Navbar from '../../components/navbar';

import './styles.css';

const Home = () => {
  return (
    <>
        <Navbar />
        <div id="swiper">
            <Swiper
                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <HeroCardOne />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroCardTwo />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroCardThree />
                </SwiperSlide>
                
            </Swiper>
        </div>

        <div className="w-full my-10">
            <div className="flex justify-center">
                <div className='text-center'>
                    <p className='text-xl font-normal'>Start Selling</p>
                    <p className='text-xl font-normal'>Trading and Buying with Generates Group Now!</p>
                    <button className='bg-black rounded-3xl py-3 px-6 mt-5'>
                        <a href={whatsAppUrl} target="_blank" rel='noreferrer' className='text-white'>
                            Get Started
                        </a>
                    </button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-10/12 mx-auto my-24'>
            <div className='about-wrapper'></div>
            <div>
                <h3 className='text-xl font-bold my-4'>More Information About Us</h3>
                <p className='text-[#FF9363] text-sm'>What we do</p>
                <p>
                    We believe in our mission to provide the best market value on the go. At Generates we endeavour to not only provide the best market value for all your digital assets but also provide seamless stress free and secure transactions on the go.
                    <br /> 
                    <br /> 
                    We provide safe and Guaranteed sales of your iTunes, google play, stream, vanilla and all premium Gift Cards for naira and carry out Crypto exchanges at the best rates in minutes.
                    <br />
                    <br />
                    We provide strong and long-lasting Personal Protective Equipments to prevent employees from hazards
                </p>
            </div>
        </div>

        <Services />
                
        <div className="w-full my-10">
            <div className="flex justify-center">
                <div className='text-center'>
                    <p className='text-xl font-normal'>Start selling,</p>
                    <p className='text-xl font-normal'>Trading and Buying with Generates Group Now!</p>
                    <button className='bg-black rounded-3xl py-3 px-6 mt-5'>
                        <a href={whatsAppUrl} target="_blank" rel='noreferrer' className='text-white'>
                            Get Started
                        </a>
                    </button>
                </div>
            </div>
        </div>

        {/* whatsapp */}
        <WhatsappButton />

        <Footer />
    </>
  )
}

export default Home;