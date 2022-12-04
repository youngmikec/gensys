import React from 'react';

//components
import AdminLayout from '../../../shared/admin-layout';
import AdminProductDetailComp from '../../../components/admin-dashboard/products/product-detail';

const AdminProductDetail = () => {
  return (
    <>
        <AdminLayout>
            <AdminProductDetailComp />
        </AdminLayout>
    </>
  )
}

export default AdminProductDetail;