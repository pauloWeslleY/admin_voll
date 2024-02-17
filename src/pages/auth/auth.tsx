import { Icon } from '@/components/ui'
import Background from '@/assets/background.svg'
import { useAuth } from './useAuth'
import { SignIn } from './modules'
import * as S from './auth-styles'

export const Authentication = () => {
  const { signInOrSignUp, handleChangedSignInOrSignUp } = useAuth()

  return (
    <S.AuthWrapper image={Background}>
      <S.AuthFormWrap>
        <S.AuthLogotipo>
          <Icon.Logo />
        </S.AuthLogotipo>

        <h2>
          {signInOrSignUp === 'signIn'
            ? 'Faça login em sua conta'
            : 'Faça seu cadastro'}
        </h2>

        {signInOrSignUp === 'signIn' ? <SignIn /> : null}

        <S.AuthLink to="#">Esqueceu sua senha?</S.AuthLink>

        <S.AuthFooter>
          <span>Ainda não tem conta?</span>
          <S.AuthFooterLink onClick={handleChangedSignInOrSignUp}>
            Faça seu cadastro!
          </S.AuthFooterLink>
        </S.AuthFooter>
      </S.AuthFormWrap>
    </S.AuthWrapper>
  )
}
