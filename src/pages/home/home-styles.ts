import { styled } from '@mui/material'

export const BannerHome = styled('div')(() => ({
  background: 'url(/assets/banner.png)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  width: '100%',
  height: 500,
}))

export const SpecialtyListWrap = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '& > h2': {
    ...theme.typography.h3,
    marginBottom: theme.spacing(4),
  },

  '& > ul': {
    display: 'flex',
    listStyleType: 'none',
    flexWrap: 'wrap',

    gap: theme.spacing(2),
  },
}))
