import { styled } from '@mui/material'
import { red } from '@mui/material/colors'
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@mui/material/FormControl'
import MuiFormHelperText, {
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material/FormHelperText'
import { FONTS } from '@/styles'

export const FormControl = styled(MuiFormControl)<MuiFormControlProps>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),

    width: '100%',

    '& > label': {
      ...theme.typography.body1,
      fontSize: FONTS.fontSizes.lg,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.primary.dark,
    },
  }),
)

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
