import { styled } from '@mui/material'
import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from '@mui/material/FormGroup'
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@mui/material/FormControl'
import { grey, red } from '@mui/material/colors'
import { Label } from '@/components/ui'
import { COLORS } from '@/styles'

export const FormGroupAddress = styled(MuiFormGroup)<MuiFormGroupProps>(
  ({ theme }) => ({
    gridColumn: 'span 4',

    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),

    '& > label': {
      gridColumn: 'span 2',
      marginTop: theme.spacing(2),
      ...Label(theme),
    },
  }),
)

export const FormSwitch = styled('div')(({ theme }) => ({
  gridColumn: 'span 4',
  placeSelf: 'center',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(0.5),

  '& > label': {
    ...Label(theme),
    marginTop: theme.spacing(2),
  },

  '& > span': {
    ...theme.typography.subtitle2,
  },
}))

export const FormControl = styled(MuiFormControl)<MuiFormControlProps>(
  ({ theme }) => ({
    gridColumn: 'span 4',

    '& > label': {
      ...Label(theme),
    },
  }),
)

export const FormGroupCheck = styled(MuiFormGroup)<MuiFormGroupProps>(
  ({ theme }) => ({
    gridColumn: 'span 4',

    '& > label': {
      ...Label(theme),
    },

    '& .MuiFormControlLabel-root': {
      marginTop: 0,

      '& .Mui-error': { color: red[500] },

      '& .MuiTypography-root': {
        ...theme.typography.subtitle1,
        color: theme.palette.text.primary,
      },
    },
  }),
)

export const CheckIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: COLORS.grey[100],
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',

  '.Mui-focusVisible &': {
    outline: `2px auto ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: grey[100],
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
  },
}))

export const CheckedIcon = styled(CheckIcon)({
  backgroundColor: COLORS.blue[300],
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: COLORS.blue[200],
  },
})
