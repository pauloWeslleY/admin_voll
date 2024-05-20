import { Navigate } from 'react-router-dom'
import { useAppSelector } from '@/store/hook'
import { RootLayout } from '@/layout'

const PrivateRoutes = () => {
  const { isLogged } = useAppSelector((state) => state.auth)

  return isLogged ? <RootLayout /> : <Navigate to="/home" />
}

export { PrivateRoutes }
