import { COLORS, FONTS } from '@/styles'
import { styled } from '@mui/material'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider'

export const TestimonialsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  textAlign: 'center',

  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(9),

  '& > h2': {
    ...theme.typography.h2,
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(8),
  },
}))

export const TestimonialCardWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  paddingInline: theme.spacing(32),

  width: '100%',
}))

export const TestimonialCard = styled('div')(({ theme }) => ({
  '& > p': {
    fontSize: FONTS.fontSizes.lg,
    color: COLORS.grey[200],
    marginBottom: theme.spacing(4),
  },
  '& > span': {
    ...theme.typography.h3,
    color: theme.palette.text.primary,
  },
}))

export const Separator = styled(MuiDivider)<MuiDividerProps>(({ theme }) => ({
  marginInline: theme.spacing(96),
}))
