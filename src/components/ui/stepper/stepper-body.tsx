import { Stack, Typography, useTheme } from '@mui/material'
import { Button } from '..'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store/hook'
import { resetStep } from '@/store/reducers'

export const StepperBody = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      gap={8}
      sx={{ marginTop: theme.spacing(9), marginBottom: theme.spacing(5) }}
    >
      <Typography
        component="span"
        variant="h3"
        sx={{ textAlign: 'center', color: theme.palette.primary.dark }}
      >
        Clinica Cadastrada
      </Typography>

      <div>
        <Button
          label="Voltar"
          onClick={() => {
            navigate('/dashboard/home')
            dispatch(resetStep())
          }}
        />
      </div>
    </Stack>
  )
}
