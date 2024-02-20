import { COLORS, FONTS, SHADOW } from '@/styles'
import { styled } from '@mui/material'
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card'

export const CardWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(6),

  marginBottom: theme.spacing(10),
}))

export const CardItem = styled(MuiCard)<MuiCardProps>(({ theme }) => ({
  background: COLORS.grey[100],
  boxShadow: SHADOW[1],
  padding: theme.spacing(4, 2),
  borderRadius: 8,

  flexBasis: 225,
  flexGrow: 1,
  flexShrink: 1,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),

  '& > p': {
    ...theme.typography.h5,
    fontSize: FONTS.fontSizes.md,
    color: theme.palette.primary.dark,
  },
}))
