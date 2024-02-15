import { PaletteOptions } from '@mui/material'
import { COLORS } from '@/styles'

type PaletteProps = { theme: 'light' | 'dark' }

export const Palette = ({ theme }: PaletteProps): PaletteOptions => ({
  mode: theme,
  common: {
    black: COLORS.black,
    white: COLORS.white,
  },
  primary: {
    main: COLORS.blue[300],
    light: COLORS.blue[200],
    dark: COLORS.blue[400],
    contrastText: COLORS.blue[100],
  },
})
