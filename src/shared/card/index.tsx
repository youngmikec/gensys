import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode,
    title?: string;
    body?: any;
    type: 'sm' | 'lg'
}

const Card = ({ children, title, type }: Props) => {
  return (
    <>
        <div className={
            `bg-white shadow-xl w-full h-max ${type === 'sm' ? 'rounded-lg p-1 sm:p-2 md:p-3 lg:p-4' : 'rounded-2xl p-3 sm:p-5 md:p-6 lg:p-8'}`
        }>
            {
                title && 
                <div className=''>
                    <h3 className='text-2xl font-medium capitalize'>{ title }</h3>
                </div>
            }
            { children }
        </div>
    </>
  )
}

export default Card;