import React from 'react';

//components
import AdminLayout from '../../../shared/admin-layout';
import AdminOrdersComp from '../../../components/admin-dashboard/orders';

const AdminOrdersPage = () => {
  return (
    <>
        <AdminLayout>
            <AdminOrdersComp />
        </AdminLayout>
    </>
  )
}

export default AdminOrdersPage;