import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '@/store/hook'

const PrivateRoutes = () => {
  const { isLogged } = useAppSelector((state) => state.auth)

  return isLogged ? <Outlet /> : <Navigate to="/home" />
}

export { PrivateRoutes }
