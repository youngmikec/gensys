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
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import WhatsappButton from '../../components/whatsapp-btn';
import HeroCardOne from '../../components/hero-cards/hero-card-one';
import HeroCardTwo from '../../components/hero-cards/hero-card-two';
import HeroCardThree from '../../components/hero-cards/hero-card-three';
import { whatsAppUrl } from '../../constant';
import Services from '../../components/services';

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
                    <p className='text-xl font-normal'>Explore! And be the Judge.</p>
                    <p className='text-xl font-normal'>Start trading with Genesys Network now!</p>
                    <button className='bg-black rounded-3xl py-3 px-6 mt-5'>
                        <a href={whatsAppUrl} target="_blank" rel='noreferrer' className='text-white'>
                            Get Started
                        </a>
                    </button>
                </div>
            </div>
        </div>

        <Services />
                
        <div className="w-full my-10">
            <div className="flex justify-center">
                <div className='text-center'>
                    <p className='text-xl font-normal'>Explore! And be the Judge.</p>
                    <p className='text-xl font-normal'>Start trading with Genesys Network now!</p>
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