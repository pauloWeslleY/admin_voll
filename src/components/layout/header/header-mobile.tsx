import { useNavigate } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useHeader } from './useHeader'
import { useAppSelector } from '@/store/hook'
import { useAuthentication } from '@/hooks/useAuthentication'

export const HeaderMobile = () => {
  const { isLogged } = useAppSelector((state) => state.auth)
  const { open, toggleDrawer, menuHeader } = useHeader()
  const { handleLogout } = useAuthentication()
  const navigate = useNavigate()

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        color="primary"
        aria-label="add an alarm"
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          {isLogged ? (
            <>
              <List>
                {menuHeader().map((props, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={props.path}>
                      <ListItemText primary={props.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ mx: 3 }} />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleLogout}>
                    <ListItemText primary="Sair" />
                  </ListItemButton>
                </ListItem>
              </List>
            </>
          ) : (
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/auth/signup')}>
                  <ListItemText primary="Cadastre-se" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/auth/signin')}>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </div>
      </Drawer>
    </div>
  )
}
