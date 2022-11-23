import React from "react";
import { Link } from "react-router-dom";


// stylesheet
import './style.css';

// image
import cautionImage from '../../assets/images/caution.png';
import logo from '../../assets/images/logo-orange.png';

const NotFoundPage = () => {

    return (
        <>
            <div className="main-content bg-[#FBF9FE] w-full min-h-screen max-h-full relative top-0 bottom-0">
                <div className="mx-auto w-5/6 sm:w-5/6 md:w-4/6 lg:w-3/6 my-auto h-max pt-12">
                    {/* Page not found text */}
                    <div className="flex justify-center mb-4">
                        <div className=''>
                            <img src={logo} width="100px" height="100px" alt="barcode" />
                        </div>
                    </div>

                    <div className="text-center">
                        <h1 className="mb-3 text-[6rem] text-[#6A6A6A] font-bold">404</h1>
                        <p className="md-text">Page Not Found</p>
                        <p className="text-[#737373] mt-4 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis viverra laoreet lorem diam sed egestas tincidunt dolor.
                        </p>

                            <Link to='/' className="bg-[#FF971D] text-white py-2 px-4 rounded-3xl">
                                Back to Home
                            </Link>
                    </div>
                </div>

                {/** Caution Image */}
                <div className="absolute bottom-2 left-2 rotate-1 z-10 w-1/4">
                    <img src={cautionImage}  alt="caution" />
                </div>
            </div>
        </>
    )
}

export default NotFoundPage;