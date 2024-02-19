import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/layout'
import { PrivateRoutes } from './private.routes'
import { Clinics, DashBoard, Home, Specialty } from '@/pages'

const AppRoutes: RouteObject = {
  path: '/',
  element: <RootLayout />,
  children: [
    { path: '/home', element: <Home /> },
    {
      element: <PrivateRoutes />,
      children: [
        { path: '/dashboard/home', element: <DashBoard /> },
        { path: '/dashboard/clinics', element: <Clinics /> },
        { path: '/dashboard/specialty', element: <Specialty /> },
      ],
    },
  ],
}

export { AppRoutes }
