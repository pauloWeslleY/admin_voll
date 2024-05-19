import { useRoutes } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { DashBoardRoute } from './dashboard.routes'

export const Routes = () => {
  const routes = useRoutes([AppRoutes(), AuthRoutes(), DashBoardRoute()])

  return routes
}
