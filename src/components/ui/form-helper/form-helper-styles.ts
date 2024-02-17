import { red } from '@mui/material/colors'
import { styled } from '@mui/material'
import MuiFormHelperText, {
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material/FormHelperText'
import { FONTS } from '@/styles'

type FormHelperProps = MuiFormHelperTextProps & {
  error?: boolean
}

export const FormHelper = styled(MuiFormHelperText)<FormHelperProps>(
  ({ theme }) => ({
    ...theme.typography.subtitle1,
    fontSize: FONTS.fontSizes.sm,
    lineHeight: FONTS.lineHeights.short,
    letterSpacing: FONTS.letterSpacings.wide,
    marginTop: 0,

    '&.Mui-error': {
      color: red[500],
    },
  }),
)
