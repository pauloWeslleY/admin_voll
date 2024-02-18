import { Link, LinkProps } from 'react-router-dom'
import { alpha, styled } from '@mui/material'
import { FONTS } from '@/styles'

export const NavBar = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(6),
}))

export const NavLink = styled(Link)<LinkProps>(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.dark,

  fontSize: FONTS.fontSizes.lg,
  transition: '.3s ease-in-out',

  ':hover': {
    color: alpha(theme.palette.primary.light, 0.8),
  },
}))
