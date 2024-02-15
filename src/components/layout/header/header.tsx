import { Icon } from '@/components/ui'
import Profile from '@/assets/account_circle.svg'
import * as S from './header-styles'

export const Header = () => {
  return (
    <S.Header>
      <Icon.Logo />

      <S.HeaderWrapper>
        <img src={Profile} alt="Imagem do Perfil do usuário" />
        <S.Link href="#">sair</S.Link>
      </S.HeaderWrapper>
    </S.Header>
  )
}
