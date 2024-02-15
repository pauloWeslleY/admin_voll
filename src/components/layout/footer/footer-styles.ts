import { styled } from '@mui/material'

export const FooterWrap = styled('footer')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2.2),

  background: theme.palette.primary.main,
  padding: theme.spacing(8),

  height: '100%',

  '& > ul': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    listStyleType: 'none',

    width: '10%',

    marginBottom: theme.spacing(2.4),
  },
}))
