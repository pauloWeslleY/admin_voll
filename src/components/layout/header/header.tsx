import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Icon, Menu } from '@/components/ui'
import { useAppSelector } from '@/store/hook'
import * as S from './header-styles'
import { MenuHeader } from './modules'
import { useHeader } from './useHeader'

type HeaderProps = { children: ReactNode }

export const Header = ({ children }: HeaderProps) => {
  const { user, isLogged } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()
  const { menuHeader } = useHeader()

  return (
    <S.Header>
      <Icon.Logo
        onClick={() => navigate('/home')}
        style={{ cursor: 'pointer' }}
      />

      {isLogged ? (
        <S.HeaderWrapper>
          <Menu.Dropdown>
            <Menu.Trigger>
              Dashboard <KeyboardArrowDownIcon />
            </Menu.Trigger>
            <Menu.List>
              {menuHeader.map((item, index) => (
                <Menu.Item key={index} onClick={() => navigate(item.path)}>
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
    </S.Header>
  )
}
