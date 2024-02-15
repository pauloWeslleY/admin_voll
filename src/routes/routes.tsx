import { useRoutes } from 'react-router-dom'
import { Home } from '@/pages/home/home'

export const Routes = () => {
  const routes = useRoutes([{ path: '/', element: <Home /> }])

  return routes
}
