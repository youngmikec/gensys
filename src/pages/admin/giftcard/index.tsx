import React from 'react';

//components
import AdminLayout from '../../../shared/admin-layout';
import AdminGiftcardComp from '../../../components/admin-dashboard/giftcard';

const AdminGiftcardsPage = () => {
  return (
    <>
        <AdminLayout>
            <AdminGiftcardComp />
        </AdminLayout>
    </>
  )
}

export default AdminGiftcardsPage