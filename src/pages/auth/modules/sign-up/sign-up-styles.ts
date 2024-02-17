import { styled } from '@mui/material'
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@mui/material/FormControl'
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
