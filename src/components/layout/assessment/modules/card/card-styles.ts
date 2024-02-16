import { styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import { COLORS } from '@/styles'

export const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  flex: '40%',
  maxWidth: '100%',

  background: COLORS.white,

  padding: theme.spacing(3.8),
  borderRadius: theme.spacing(3.5),
  boxShadow: theme.shadows[3],

  margin: theme.spacing(4, 5, 4),
}))

export const CardContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(3.9),
}))

export const CardInfo = styled('div')(({ theme }) => ({
  '& > h3': {
    ...theme.typography.h4,
    color: grey[700],
  },

  '& > p': {
    ...theme.typography.body1,
    color: grey[500],
  },
}))
