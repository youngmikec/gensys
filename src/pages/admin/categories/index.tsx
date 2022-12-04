import React from 'react';

//components
import AdminLayout from '../../../shared/admin-layout';
import AdminCategoriesComp from '../../../components/admin-dashboard/categories/categories';

const CategoriesPage = () => {
  return (
    <>
        <AdminLayout>
            <AdminCategoriesComp />
        </AdminLayout>
    </>
  )
}

export default CategoriesPage