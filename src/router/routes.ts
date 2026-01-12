import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { ClientLayout } from '../layouts/ClientLayout/ClientLayout';
import { Auth } from '../pages/Auth/Auth';

export const router = createBrowserRouter(
  [
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
      path: '/auth/login',
      Component: Auth,
    },
    // {
    //   path: 'NaturalDisasters',
    //   Component: NaturalDisasters,
    // },
    // {
    //   path: '*',
    //   element: <Navigate to={'/'} />,
    // },
  ],
  { basename: import.meta.env.BASE_URL }
);
