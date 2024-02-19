import { Theme } from '@mui/material'
import { FONTS } from '@/styles'

export const Label = (theme: Theme) => ({
  ...theme.typography.body1,
  fontSize: FONTS.fontSizes.lg,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.primary.dark,
})
