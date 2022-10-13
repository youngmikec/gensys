import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-redesign.jpeg';

type Props = {
  bg?: string;
  text?: string;
}

const Navbar = ({bg, text}: Props) => {
  return (
    <>
      <div className='bg-black w-full'>
        <div className={`mx-auto w-10/12 flex justify-between`}>
          <div>
            <img src={logo} alt="logo" width="170px" height="170px" />
          </div>
          <div className='pt-6'>
            <ul className='list-none'>
              <li className='mx-6 inline text-lg text-white hover:text-[#FF9363]'><Link to="/">Home</Link></li>
              <li className='mx-6 inline text-lg text-white hover:text-[#FF9363]'><Link to="/services">Services</Link></li>
              <li className='mx-6 inline text-lg text-white hover:text-[#FF9363]'><Link to="/rating">Rating</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;