import { Navigate, useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { Icon } from '@/components/ui'
import Background from '@/assets/background.svg'
import * as S from './styles'

const AuthLayout = () => {
  const navigate = useNavigate()
  const outlet = useOutlet()
  const { pathname } = useLocation()
  const currentPath = pathname === '/auth/signin'

  const toggleNavigate = () => {
    navigate(currentPath ? '/auth/signup' : '/auth/signin')
  }

  if (pathname === '/auth') return <Navigate to="/auth/signin" />

  return (
    <S.Container image={Background}>
      <S.AuthWrapper>
        <S.AuthLogotipo onClick={() => navigate('/home')}>
          <Icon.Logo />
        </S.AuthLogotipo>

        <h2>{currentPath ? 'Faça login em sua conta' : 'Faça seu cadastro'}</h2>

        {outlet}

        {currentPath && <S.AuthLink to="#">Esqueceu sua senha?</S.AuthLink>}

        <S.AuthFooter>
          <span>{currentPath ? 'Ainda não tem conta?' : 'Já tem conta?'}</span>
          <S.AuthFooterLink onClick={toggleNavigate}>
            {currentPath ? 'Faça seu cadastro!' : 'Fazer Login '}
          </S.AuthFooterLink>
        </S.AuthFooter>
      </S.AuthWrapper>
    </S.Container>
  )
}

export { AuthLayout }
