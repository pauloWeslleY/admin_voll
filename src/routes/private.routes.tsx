import { DashBoard } from '@/pages'
import { useAppSelector } from '@/store/hook'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const { isLogged } = useAppSelector((state) => state.auth)

  return isLogged ? <DashBoard /> : <Navigate to="/home" />
}

export { PrivateRoutes }
