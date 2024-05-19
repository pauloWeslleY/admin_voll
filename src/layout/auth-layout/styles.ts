import { Link, LinkProps } from 'react-router-dom'
import { styled } from '@mui/material'
import * as THEME from '@/styles'

type ContainerProps = { image: string }

export const Container = styled('div')<ContainerProps>(({ image }) => ({
  background: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  width: '100%',
  height: '100%',
  minHeight: '100vh',
  overflow: 'auto',

  display: 'flex',
  justifyContent: 'center',
}))

export const AuthWrapper = styled('div')(({ theme }) => ({
  width: 793,
  height: 'max-content',
  minHeight: '100vh',
  background: theme.palette.common.white,
  paddingInline: theme.spacing(28),
  paddingBottom: theme.spacing(10),

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > h2': {
    textAlign: 'center',
    color: THEME.COLORS.text[100],
    lineHeight: THEME.FONTS.lineHeights[7],
    fontWeight: THEME.FONTS.fontWeight.bold,
    ...theme.typography.h2,
  },

  '& > form': {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),

    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },

  [theme.breakpoints.down('md')]: {
    paddingInline: theme.spacing(5),
  },
}))

export const AuthLogotipo = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(20),
  cursor: 'pointer',
}))

export const AuthLink = styled(Link)<LinkProps>(({ theme }) => ({
  color: theme.palette.primary.dark,
  textDecoration: 'none',

  fontWeight: THEME.FONTS.fontWeight.semibold,
  fontSize: THEME.FONTS.fontSizes.md,

  transition: '.5s ease-in-out',

  ':hover': {
    color: theme.palette.primary.light,
  },
}))

export const AuthFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.9),

  marginTop: theme.spacing(8),

  '& > span': {
    lineHeight: 0,
    color: theme.palette.text.primary,
  },
}))

export const AuthFooterLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.light,
  cursor: 'pointer',
  textDecoration: 'none',

  fontWeight: THEME.FONTS.fontWeight.semibold,
  fontSize: THEME.FONTS.fontSizes.md,

  transition: '.5s ease-in-out',

  ':hover': {
    color: theme.palette.primary.contrastText,
  },
}))
