import { RouteObject } from 'react-router-dom'
import { AuthLayout } from '@/layout'
import { Auth } from '@/pages'

const AuthRoutes = (): RouteObject => ({
  path: '/auth',
  element: <AuthLayout />,
  children: [
    { path: 'signin', element: <Auth.SignIn /> },
    { path: 'signup', element: <Auth.SignUp /> },
  ],
})

export { AuthRoutes }
