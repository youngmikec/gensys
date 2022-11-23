import React from 'react';
import { Navigate } from 'react-router-dom';

import { getItem } from '../utils';

type Props = {
    children: any
}

export const ProtectedRoutes = ({ children }: Props) => {
  const token = getItem('clientToken');
  if(token){
    return children;
  }
  return <Navigate to="/" />
}

export const UnProtectedRoutes = ({ children }: Props) => {
  const token = getItem('clientToken');
  if(token){
      return <Navigate to="/dashboard" />
    }
    return children;
}

export default ProtectedRoutes;