import { FONTS } from '@/styles'
import { styled } from '@mui/material'
import { blue } from '@mui/material/colors'

export const InputField = styled('div')(({ theme }) => ({
  width: 210,
  height: 48,
  padding: '0 6px',
  borderRadius: theme.spacing(2),

  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2.5),

  background: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[400]}`,
  boxShadow: '0px 2px 4px rgba(0,0,0, 0.07)',

  '& > input': {
    width: 150,
    border: 'none',
    padding: theme.spacing(3.5),

    fontSize: FONTS.fontSizes.sm,
    color: theme.palette.grey[500],

    ':hover': {
      borderColor: blue[400],
    },

    '&::placeholder': {
      ...theme.typography.body1,
      fontSize: FONTS.fontSizes.md,
      color: theme.palette.grey[500],
    },

    // firefox
    ':focus-visible': {
      outline: 0,
    },
  },
}))
