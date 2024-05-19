import { ReactNode } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Icon, Menu } from '@/components/ui'
import { useAppSelector } from '@/store/hook'
import { MenuHeader } from './modules'
import { useHeader } from './useHeader'
import { HeaderMobile } from './header-mobile'
import * as S from './styles'

export const Header = ({ children }: { children: ReactNode }) => {
  const { user, isLogged } = useAppSelector((state) => state.auth)
  const { menuHeader, pushHome } = useHeader()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <S.Header>
      <Icon.Logo onClick={pushHome} style={{ cursor: 'pointer' }} />

      {isLogged ? (
        <S.HeaderWrapper>
          <Menu.Dropdown>
            <Menu.Trigger>
              Dashboard <KeyboardArrowDownIcon />
            </Menu.Trigger>
            <Menu.List>
              {menuHeader().map((item, index) => (
                <Menu.Item key={index} onClick={item.path}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.List>
          </Menu.Dropdown>

          {user.photoUrl ? (
            <MenuHeader />
          ) : (
            <Icon.UserAccount sx={{ fontSize: 40 }} />
          )}
        </S.HeaderWrapper>
      ) : (
        <> {children} </>
      )}

      {isMobileScreen && <HeaderMobile />}
    </S.Header>
  )
}
