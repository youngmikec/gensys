import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-orange.png';

type Props = {
  bg?: string;
  text?: string;
}

const Navbar = ({bg, text}: Props) => {
  return (
    <>
      <div className='bg-[#1b1b1b] w-full'>
        <div className={`mx-auto w-10/12 flex justify-between`}>
          <div>
            <img src={logo} alt="logo" width="80rem" height="80rem" />
          </div>
          <div className='pt-4'>
            <ul className='list-none'>
              <li className='mx-6 inline text-lg text-yellow-400 hover:text-white'><Link to="/">Home</Link></li>
              <li className='mx-6 inline text-lg text-yellow-400 hover:text-white'><Link to="/services">Services</Link></li>
              <li className='mx-6 inline text-lg text-yellow-400 hover:text-white'><Link to="/rating">Rating</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;