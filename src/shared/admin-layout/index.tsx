import React, { ReactNode } from 'react';

import './style.css';

// components
import Sidebar from '../sidebar';
import Topbar from '../top-bar';

type Props = {
    children: ReactNode
}

const AdminLayout = ({children}: Props) => {
  return (
    <>
        <div className='content-wrapper flex'>
            <div className='flex-11 hidden min-h-screen
                sm:hidden
                md:block
                lg:block'
            >
                <Sidebar />
            </div>
            <div className='flex-1'>
                <div className='mx-auto w-11/12'>
                    <Topbar />
                    { children }
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminLayout;