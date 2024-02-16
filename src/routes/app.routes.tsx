import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/layout'

const AppRoutes: RouteObject = {
  path: '/',
  element: <RootLayout />,
  children: [
    { path: 'home', element: <h2>home</h2> },
    {
      path: 'dashboard',
      element: <h2>private</h2>,
      children: [{ path: 'home', element: <h2>Dashboard</h2> }],
    },
  ],
}

export { AppRoutes }
