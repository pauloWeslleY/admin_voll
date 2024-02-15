import { styled } from '@mui/material'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'

export const Header = styled('header')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2em 4em',
}))

export const HeaderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(8),
  marginRight: theme.spacing(1.4),
  flexGrow: 0.1,
}))

export const Link = styled(MuiLink)<MuiLinkProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightBold,
}))
