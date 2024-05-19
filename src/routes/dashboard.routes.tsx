import { RouteObject } from 'react-router-dom'
import { PrivateRoutes } from './private.routes'
import { Clinics, DashBoard, Specialty } from '@/pages'

export const DashBoardRoute = (): RouteObject => ({
  path: '/dashboard',
  element: <PrivateRoutes />,
  children: [
    { path: '/dashboard/home', element: <DashBoard /> },
    { path: '/dashboard/clinics', element: <Clinics /> },
    { path: '/dashboard/specialty', element: <Specialty /> },
  ],
})
