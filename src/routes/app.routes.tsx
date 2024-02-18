import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/layout'
import { Clinics, DashBoard, Home } from '@/pages'
import { PrivateRoutes } from './private.routes'

const AppRoutes: RouteObject = {
  path: '/',
  element: <RootLayout />,
  children: [
    { path: 'home', element: <Home /> },
    {
      path: 'dashboard',
      element: <PrivateRoutes />,
      children: [
        { path: 'home', element: <DashBoard /> },
        { path: 'clinics', element: <Clinics /> },
      ],
    },
  ],
}

export { AppRoutes }
