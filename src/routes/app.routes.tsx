import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/layout'
import { Home } from '@/pages'

const AppRoutes = (): RouteObject => ({
  path: '/',
  element: <RootLayout />,
  children: [{ path: '/home', element: <Home /> }],
})

export { AppRoutes }
