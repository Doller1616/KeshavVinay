
import React, { Suspense } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import NotFound404 from './404';
import SuperContainer from './SuperContainer';
import routeConfig from './routeConfig';
import MainLayout from './MainLayout';
import LoginPage from './Login';

const App = () => {
  const routes = useRoutes([
    ...routeConfig,
    { path: '*', element: <NotFound404 /> }
  ])

  // HTML
  return (
    <SuperContainer>
         <MainLayout pages={routes}  />
    </SuperContainer>
  );

}

export default App
