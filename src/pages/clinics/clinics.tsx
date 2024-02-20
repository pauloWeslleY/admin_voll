import { Typography } from '@mui/material'
import { Wrapper } from '@/components/layout'
import { FormStepper } from './components'

export const Clinics = () => {
  return (
    <Wrapper sx={{ height: 'auto' }}>
      <Typography component="h2" variant="h3" sx={{ textAlign: 'center' }}>
        Primeiro, alguns dados básicos
      </Typography>

      <FormStepper />
    </Wrapper>
  )
}
