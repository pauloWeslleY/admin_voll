import { TypographyOptions } from '@mui/material/styles/createTypography'
import { FONTS } from '@/styles'

type TypographyProps = { fontFamily: string }

const Typography = ({ fontFamily }: TypographyProps): TypographyOptions => ({
  fontFamily,
  fontWeightLight: FONTS.fontWeight.light,
  fontWeightRegular: FONTS.fontWeight.regular,
  fontWeightMedium: FONTS.fontWeight.medium,
  fontWeightBold: FONTS.fontWeight.semibold,
  h1: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes['4xl'],
    lineHeight: 1.21,
  },
  h2: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes['3xl'],
    lineHeight: 1.27,
  },
  h3: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes['2xl'],
    lineHeight: 1.33,
  },
  h4: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes.md,
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes.sm,
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: FONTS.fontWeight.regular,
    fontSize: FONTS.fontSizes.xs,
    lineHeight: 1.57,
  },
  caption: {
    fontWeight: FONTS.fontWeight.regular,
    fontSize: FONTS.fontSizes.xs,
    lineHeight: 1.66,
  },
  body1: {
    fontSize: FONTS.fontSizes.sm,
    lineHeight: 1.57,
  },
  body2: {
    fontSize: FONTS.fontSizes.xs,
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: FONTS.fontSizes.sm,
    fontWeight: FONTS.fontWeight.semibold,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontSize: FONTS.fontSizes.xs,
    fontWeight: FONTS.fontWeight.regular,
    lineHeight: 1.66,
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    textTransform: 'capitalize',
  },
})

export { Typography }
