import React from 'react';
import { Navigate } from 'react-router-dom';

import { getItem } from '../utils';

type Props = {
    children: any
}

export const ProtectedRoutes = ({ children }: Props) => {
  const token = getItem('clientToken');
  const clientD = getItem('clientD');

  if(token && clientD){
    if(clientD.userType === 'ADMIN') return children;
    if(clientD.userType === 'USER') return <Navigate to="/" />
  }
  
  return <Navigate to="/" />
}

export const UnProtectedRoutes = ({ children }: Props) => {
  const token = getItem('clientToken');
  const clientD = getItem('clientD');

  if(token && clientD.userType === 'ADMIN'){
    return <Navigate to="/dashboard" />
  }
  
  return children;
}

export default ProtectedRoutes;