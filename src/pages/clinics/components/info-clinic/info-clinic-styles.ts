import { FONTS, ROUNDED } from '@/styles'
import { styled } from '@mui/material'

export const InfoClinicWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',

  '& > h2': {
    ...theme.typography.h2,
  },
}))

export const InfoClinicContent = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(5),

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'auto',
  gap: theme.spacing(3),
}))

type InfoClinicType = { gridCol: string }

export const InfoClinic = styled('div')<InfoClinicType>(
  ({ theme, gridCol }) => ({
    gridColumn: gridCol,

    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),

    borderRadius: ROUNDED.lg,

    padding: theme.spacing(2),
    background: theme.palette.grey[100],

    '& > h3': {
      ...theme.typography.h4,
      fontSize: FONTS.fontSizes.xl,
      color: theme.palette.primary.dark,
    },

    '& > p': {
      fontSize: FONTS.fontSizes.md,
    },
  }),
)
