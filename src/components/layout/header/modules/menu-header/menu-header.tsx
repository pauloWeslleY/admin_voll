import { Avatar, Typography, useTheme } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Menu } from '@/components/ui'
import { useAppSelector } from '@/store/hook'
import { useAuthentication } from '@/pages/auth/hooks/useAuthentication'

export const MenuHeader = () => {
  const { user } = useAppSelector((state) => state.auth)
  const { handleLogout } = useAuthentication()
  const theme = useTheme()

  return (
    <Menu.Dropdown>
      <Menu.Trigger>
        <div>
          <Typography
            component="h4"
            variant="h4"
            sx={{
              textTransform: 'capitalize',
              color: theme.palette.primary.dark,
            }}
          >
            {user.username}
          </Typography>
          <Typography
            component="span"
            variant="subtitle1"
            sx={{ color: theme.palette.grey[600] }}
          >
            {user.email}
          </Typography>
        </div>

        <Avatar
          src={user.photoUrl}
          alt={`Foto do usuário ${user.username}`}
          sx={{
            width: 48,
            height: 48,
            border: `2px solid ${theme.palette.primary.light}`,
          }}
        />

        <KeyboardArrowDownIcon />
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item>
          <AccountCircleIcon sx={{ width: 20, height: 20, color: 'inherit' }} />
          Meu Perfil
        </Menu.Item>
        <Menu.Item onClick={handleLogout}>
          <LogoutIcon sx={{ width: 20, height: 20, color: 'inherit' }} />
          Sair
        </Menu.Item>
      </Menu.List>
    </Menu.Dropdown>
  )
}
