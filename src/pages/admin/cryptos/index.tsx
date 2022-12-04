import React from 'react';

//components
import AdminLayout from '../../../shared/admin-layout';
import AdminCryptoComp from '../../../components/admin-dashboard/cryptocurrency';

const AdminCryptosPage = () => {
  return (
    <>
        <AdminLayout>
            <AdminCryptoComp />
        </AdminLayout>
    </>
  )
}

export default AdminCryptosPage