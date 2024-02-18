import { useAppSelector } from '@/store/hook'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const { isLogged } = useAppSelector((state) => state.auth)

  return isLogged ? <Outlet /> : <Navigate to="/home" />
}

export { PrivateRoutes }
