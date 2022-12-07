import React from 'react';
import moment from 'moment';

import { Category } from '../../../model';
import defaultImg from '../../../assets/images/upload-img.png';

type Props = {
    category?: Category
}

const CategoryDetail = ({ category }: Props) => {
    
  return (
    <>
        <div className='w-full'>
            <div className="flex justify-start my-2">
                <div className='mx-2 w-5/12'>
                    <img src={category?.categoryImage || defaultImg } width="100%" height="200px" alt="black friday" />
                </div>
                <div className='mr-2 text-sm w-7/12'>
                    <h2 className='text-sm font-semibold my-2 text-[#8c8c8c]'>
                        <b>Category Name:</b> {category?.name}
                    </h2>
                    <h2 className='text-lg font-semibold my-2 text-[#8c8c8c]'>
                        <b>Created By:</b> {category?.createdBy?.firstName} { category?.createdBy?.lastName}
                    </h2>
                    <h2 className='text-lg font-semibold my-2 text-[#8c8c8c]'>
                        <b>Date created:</b> {moment(category?.createdAt).format("MM-DD-YYYY")}
                    </h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryDetail;