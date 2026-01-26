import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { ClientLayout } from '../layouts/ClientLayout/ClientLayout';
import { Auth } from '../pages/Auth/Auth';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: ClientLayout,
      },
    ],
  },
  {
    path: '/auth/:type',
    Component: Auth,
  },
  // {
  //   path: '*',
  //   element: <Navigate to="/" />,
  // },
]);
