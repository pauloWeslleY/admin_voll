import { styled } from '@mui/material'
import { SHADOW } from '@/styles'

export const SectionSearchingWrap = styled('div')(({ theme }) => ({
  padding: theme.spacing(8),
  marginBlock: theme.spacing(10),
  borderRadius: theme.spacing(2),
  boxShadow: SHADOW[1],

  '& > form': {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(4),
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5),
    marginBlock: theme.spacing(7),

    '& > form': {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  },
}))
