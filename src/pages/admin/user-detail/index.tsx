import React from 'react';

//components
import UserDetailComp from '../../../components/admin-dashboard/user-detail-comp';
import AdminLayout from '../../../shared/admin-layout';

const UserDetailPage = () => {
  return (
    <>
        <AdminLayout>
            <UserDetailComp />
        </AdminLayout>
    </>
  )
}

export default UserDetailPage;