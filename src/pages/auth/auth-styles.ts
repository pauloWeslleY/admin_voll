import { Link, LinkProps } from 'react-router-dom'
import { styled } from '@mui/material'
import { COLORS, FONTS } from '@/styles'

type AuthWrapperProps = { image: string }

export const AuthWrapper = styled('div')<AuthWrapperProps>(({ image }) => ({
  background: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  minHeight: '100vh',

  display: 'flex',
  justifyContent: 'center',
}))

export const AuthFormWrap = styled('div')(({ theme }) => ({
  width: 793,
  background: theme.palette.common.white,
  paddingInline: theme.spacing(28),
  paddingBottom: theme.spacing(10),

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > h2': {
    textAlign: 'center',
    color: COLORS.text[100],
    lineHeight: FONTS.lineHeights[7],
    fontWeight: FONTS.fontWeight.bold,
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
}))

export const AuthLogotipo = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(20),
}))

export const AuthLink = styled(Link)<LinkProps>(({ theme }) => ({
  color: theme.palette.primary.dark,
  textDecoration: 'none',

  fontWeight: FONTS.fontWeight.semibold,
  fontSize: FONTS.fontSizes.md,

  transition: '.5s ease-in-out',

  ':hover': {
    color: theme.palette.primary.light,
  },
}))

export const AuthFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),

  marginTop: theme.spacing(8),

  '& > span': {
    color: theme.palette.text.primary,
    ...theme.typography.body1,
  },
}))

export const AuthFooterLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.light,
  cursor: 'pointer',
  textDecoration: 'none',

  fontWeight: FONTS.fontWeight.semibold,
  fontSize: FONTS.fontSizes.md,

  transition: '.5s ease-in-out',

  ':hover': {
    color: theme.palette.primary.contrastText,
  },
}))
