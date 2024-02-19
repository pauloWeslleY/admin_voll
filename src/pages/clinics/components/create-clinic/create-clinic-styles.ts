import { Link, LinkProps, styled } from '@mui/material'
import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from '@mui/material/FormGroup'
import { COLORS, ROUNDED } from '@/styles'
import { Label } from '@/components/ui'

export const FormContainer = styled(MuiFormGroup)<MuiFormGroupProps>(
  ({ theme }) => ({
    gridColumn: 'span 3',

    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: theme.spacing(2),

    '& > label': {
      ...Label(theme),
      marginTop: theme.spacing(2),

      gridColumn: 'span 3',
    },
  }),
)

export const FormLink = styled(Link)<LinkProps>(({ theme }) => ({
  width: 200,
  cursor: 'pointer',

  borderRadius: ROUNDED.xl,
  marginTop: theme.spacing(6),
  padding: theme.spacing(2, 4),

  textTransform: 'uppercase',
  textDecoration: 'none',
  textAlign: 'center',
  ...theme.typography.h4,

  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,

  transition: '.3s ease-in-out',

  ':hover': {
    backgroundColor: COLORS.blue[200],
  },
}))
