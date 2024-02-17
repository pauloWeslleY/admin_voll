import { ReactNode } from 'react'
import { Avatar, useTheme } from '@mui/material'
import { Icon } from '@/components/ui'
import { useAppSelector } from '@/store/hook'
import { useAuthentication } from '@/pages/auth/hooks/useAuthentication'
import * as S from './header-styles'

type HeaderProps = { children: ReactNode }

export const Header = ({ children }: HeaderProps) => {
  const { user, isLogged } = useAppSelector((state) => state.auth)
  const { handleLogout } = useAuthentication()
  const theme = useTheme()

  return (
    <S.Header>
      <Icon.Logo />

      {isLogged ? (
        <S.HeaderWrapper>
          {user.photoUrl ? (
            <Avatar
              src={user.photoUrl}
              alt={`Foto do usuário ${user.username}`}
              sx={{
                width: 56,
                height: 56,
                border: `2px solid ${theme.palette.primary.light}`,
              }}
            />
          ) : (
            <Icon.UserAccount sx={{ fontSize: 40 }} />
          )}

          <S.LogoutLink href="#" onClick={handleLogout}>
            sair
          </S.LogoutLink>
        </S.HeaderWrapper>
      ) : (
        <> {children} </>
      )}
    </S.Header>
  )
}
