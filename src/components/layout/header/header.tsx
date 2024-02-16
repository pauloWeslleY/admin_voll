import { ReactNode } from 'react'
import { Icon } from '@/components/ui'
import * as S from './header-styles'
// import Profile from '@/assets/account_circle.svg'

type HeaderProps = { children: ReactNode }

export const Header = ({ children }: HeaderProps) => {
  return (
    <S.Header>
      <Icon.Logo />

      {children}

      {/* <S.HeaderWrapper>
        <img src={Profile} alt="Imagem do Perfil do usuário" />
        <S.LogoutLink href="#">sair</S.LogoutLink>
      </S.HeaderWrapper> */}
    </S.Header>
  )
}
