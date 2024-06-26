import { ReactNode, useMemo } from 'react'
import MuiGlobalStyles from '@mui/material/GlobalStyles'
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { Typography } from './typography'
import { Palette } from './palette'
import { spacing } from '@/styles/utilities'
import { FONTS } from '@/styles'
import { GlobalStyles } from './global-styles'
import { ComponentOverrides } from './overrides'

export const ThemeCustomization = ({ children }: { children: ReactNode }) => {
  const themePalette = Palette({ theme: 'light' })
  const components = ComponentOverrides()
  const themeTypography = Typography({
    fontFamily: FONTS.fontFamily.PUBLIC_SANS,
  })

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      spacing,
      typography: themeTypography,
      palette: themePalette,
      components,
    }),
    [themeTypography, themePalette, components],
  )

  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MuiGlobalStyles styles={GlobalStyles} />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
