import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { Input } from './modules'
import * as S from './navbar-styles'

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <S.NavBar>
      <S.NavLink to="#">Sobre</S.NavLink>
      <S.NavLink to="/auth">Cadastre-se</S.NavLink>

      <Input placeholder="Digite sua busca" />

      <Button onClick={() => navigate('/auth')}>Login</Button>
    </S.NavBar>
  )
}
