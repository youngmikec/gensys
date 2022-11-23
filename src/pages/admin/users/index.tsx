import React from 'react';

//components
import AdminLayout from '../../../shared/admin-layout';
import AdminUsersComp from '../../../components/admin-dashboard/users-comp'

const UsersPage = () => {
  return (
    <>
        <AdminLayout>
            <AdminUsersComp />
        </AdminLayout>
    </>
  )
}

export default UsersPage