import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publicRoutes, RouteType } from './routes/auth-routes';
import ProtectedRoutes, { UnProtectedRoutes } from './routes/protected-routes';


function App() {
  const getRoutes = (routes: RouteType[]) => routes.map((route: RouteType, index: number) => {
    const Component = route.component;
    return <Route key={index} path={route.path} element={ 
      <UnProtectedRoutes>
        {Component}
      </UnProtectedRoutes>
    } />
  })

  const getPrivateRoutes = (routes: RouteType[]) => routes.map((route: RouteType, index: number) => {
    const Component = route.component;
    return <Route key={index} path={route.path} element={ <ProtectedRoutes>{Component}</ProtectedRoutes>} />
  })

  return (
    <Router>
      <Routes>
        {getRoutes(publicRoutes)}
        {/* {getPrivateRoutes(privateRoutes)} */}
      </Routes>
    </Router>
  );
}

export default App;
