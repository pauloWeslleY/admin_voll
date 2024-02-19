import { blue, grey } from '@mui/material/colors'
import { COLORS, FONTS } from '@/styles'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    default: true
  }
}

export const useButtonDefault = {
  boxShadow: 'none',
  textTransform: 'uppercase',
  fontSize: FONTS.fontSizes.md,
  fontWeight: FONTS.fontWeight.bold,
  padding: '12px 16px',
  borderRadius: '2rem',
  border: `1px solid ${COLORS.blue[400]}`,
  lineHeight: FONTS.lineHeights.base,
  backgroundColor: COLORS.blue[300],
  color: COLORS.white,
}

export const Button = () => {
  const disabledStyle = {
    '&.Mui-disabled': {
      backgroundColor: grey[200],
      color: grey[700],
      border: 0,
      cursor: 'default',
      boxShadow: 'none',
      transform: 'scale(1)',
    },
  }

  const containedStyles = {
    '&.MuiButton-contained': {
      background: COLORS.blue[100],
      ...useButtonDefault,
    },
  }

  const hoverStyle = {
    '&:hover': {
      color: COLORS.blue[400],
      backgroundColor: COLORS.blue[200],
      borderColor: COLORS.blue[200],
      boxShadow: `0 2px 1px 'rgba(45, 45, 60, 0.2)', inset 0 1.5px 1px ${COLORS.blue[400]}, inset 0 -2px 1px ${blue[600]}`,
    },
  }

  const activeStyle = {
    '&:active': {
      boxShadow: 'none',
      backgroundColor: COLORS.blue[100],
      borderColor: COLORS.blue[100],
      transform: 'scale(0.99)',
    },
  }

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          background: COLORS.blue[300],
          color: COLORS.white,
          borderRadius: '0.5rem',
          padding: '12px 16px',
          boxShadow: 'none',
          border: `1px solid ${COLORS.blue[400]}`,
          lineHeight: FONTS.lineHeights.base,
          fontWeight: FONTS.fontWeight.bold,
          fontSize: FONTS.fontSizes.md,
          ...hoverStyle,
          ...activeStyle,
        },
        contained: {
          ...disabledStyle,
          ...hoverStyle,
          ...activeStyle,
          ...containedStyles,
        },
        outlined: {
          ...disabledStyle,
          ...hoverStyle,
          ...activeStyle,
        },
      },
      variant: [
        {
          props: { variant: 'default' },
          style: {
            boxShadow: 'none',
            textTransform: 'uppercase',
            fontSize: FONTS.fontSizes.md,
            fontWeight: FONTS.fontWeight.bold,
            padding: '8px 16px',
            borderRadius: '2rem',
            border: `1px solid ${COLORS.blue[400]}`,
            background: COLORS.blue[100],
            color: COLORS.white,
          },
        },
      ],
    },
  }
}
