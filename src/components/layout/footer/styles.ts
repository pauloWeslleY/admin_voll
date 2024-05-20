import { styled } from '@mui/material'

export const FooterWrap = styled('footer')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2.2),

  background: theme.palette.primary.main,
  padding: theme.spacing(8),

  height: '100%',
  width: '100%',

  '& > ul': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(10),
    listStyleType: 'none',
    width: '100%',
    marginBottom: theme.spacing(2.4),
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5),

    '& > ul': {
      justifyContent: 'center',
      gap: theme.spacing(5.2),
      marginBottom: theme.spacing(1.4),
    },

    '& > span': {
      textAlign: 'center',
    },
  },
}))
