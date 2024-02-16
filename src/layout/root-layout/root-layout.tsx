import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Footer, Header, NavBar } from '@/components/layout'

export const RootLayout = () => {
  const { pathname } = useLocation()

  if (pathname === '/') return <Navigate to="/home" />

  return (
    <>
      <Header>
        <NavBar />
      </Header>

      <Outlet />

      <Footer />
    </>
  )
}
