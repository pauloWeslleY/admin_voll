import { COLORS, FONTS } from '../styles/index'

export const GlobalStyles = {
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,

    fontFamily: FONTS.fontFamily.PUBLIC_SANS,

    '::-webkit-scrollbar': {
      width: '0.65rem',
    },
    '::-webkit-scrollbar-track': {
      background: COLORS.grey[100],
    },
    '::-webkit-scrollbar-thumb': {
      background: COLORS.blue[50],
      borderRadius: '2.2rem',
    },
  },

  button: {
    cursor: 'pointer',
  },
}
