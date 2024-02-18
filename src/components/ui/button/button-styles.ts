import { styled } from '@mui/material'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { COLORS, FONTS } from '@/styles'
import { spacing } from '@/styles/utilities'
import { grey } from '@mui/material/colors'

export const Button = styled(MuiButton)<MuiButtonProps>({
  boxShadow: 'none',
  textTransform: 'uppercase',
  fontSize: FONTS.fontSizes.md,
  fontWeight: FONTS.fontWeight.bold,
  padding: '12px 16px',
  borderRadius: spacing(2),
  border: `1px solid ${COLORS.blue[400]}`,
  lineHeight: FONTS.lineHeights.base,
  backgroundColor: COLORS.blue[300],
  color: COLORS.white,

  transition: '.2s ease-in-out',

  '&:hover': {
    backgroundColor: COLORS.blue[200],
    borderColor: COLORS.blue[200],
    boxShadow: 'none',
  },

  '&:active': {
    boxShadow: 'none',
    backgroundColor: COLORS.blue[100],
    borderColor: COLORS.blue[100],
  },

  '&.Mui-disabled': {
    background: grey[400],
    color: grey[700],
    border: 0,
    cursor: 'default',
    boxShadow: 'none',
    transform: 'scale(1)',
  },
})
