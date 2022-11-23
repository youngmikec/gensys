import React, { useEffect, useState } from 'react';

//components
import AdminLayout from '../../../shared/admin-layout';
import AdminDashboard from '../../../components/admin-dashboard';
// import UsersDashboard from '../../../components/users-dashboard';
import { getItem } from '../../../utils';

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const { isLoggedIn, user } = getItem('auth');
    (isLoggedIn && (user.role === 'user')) ? setIsAdmin(false) : setIsAdmin(true); 
  }, []);

  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  )
}

export default Dashboard