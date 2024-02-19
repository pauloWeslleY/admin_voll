import { styled } from '@mui/material'
import { red } from '@mui/material/colors'
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@mui/material/FormControl'
import MuiFormHelperText, {
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material/FormHelperText'
import { FONTS } from '@/styles'
import { Label } from '../index'

export const FormControl = styled(MuiFormControl)<MuiFormControlProps>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),

    width: '100%',

    '& > label': {
      ...Label(theme),
    },
  }),
)

export const FormHelper = styled(MuiFormHelperText)<MuiFormHelperTextProps>(
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
