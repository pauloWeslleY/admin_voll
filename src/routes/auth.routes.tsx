import { RouteObject } from 'react-router-dom'
import { Authentication } from '@/pages'

const AuthRoutes: RouteObject = {
  path: '/auth',
  element: <Authentication />,
}

export { AuthRoutes }
