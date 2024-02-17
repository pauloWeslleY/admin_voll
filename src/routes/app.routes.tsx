import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/layout'
import { Home } from '@/pages'

const AppRoutes: RouteObject = {
  path: '/',
  element: <RootLayout />,
  children: [
    { path: 'home', element: <Home /> },
    {
      path: 'dashboard',
      element: <h2>private</h2>,
      children: [{ path: 'home', element: <h2>Dashboard</h2> }],
    },
  ],
}

export { AppRoutes }
