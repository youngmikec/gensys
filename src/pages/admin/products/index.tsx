import React from 'react';

//components
import AdminLayout from '../../../shared/admin-layout';
import AdminProductsComp from '../../../components/admin-dashboard/products/products';

const AdminProductsPage = () => {
  return (
    <>
        <AdminLayout>
            <AdminProductsComp />
        </AdminLayout>
    </>
  )
}

export default AdminProductsPage;