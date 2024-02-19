import { Components } from '@mui/material'
import { Button } from './index'

export const ComponentOverrides = (): Components => {
  const { MuiButton } = Button()

  return {
    MuiButton,
  }
}
