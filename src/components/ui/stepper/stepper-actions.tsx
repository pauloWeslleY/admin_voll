import { Button, Stack } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { prevStep } from '@/store/reducers'
import { FONTS } from '@/styles'

export const StepperActions = () => {
  const { step } = useAppSelector((state) => state.stepper)
  const dispatch = useAppDispatch()

  return (
    <Stack flexDirection="row" justifyContent="flex-end" sx={{ pt: 2 }}>
      <Button
        color="inherit"
        disabled={step === 0}
        onClick={() => dispatch(prevStep())}
        sx={{ mr: 1, fontSize: FONTS.fontSizes.lg }}
      >
        Voltar
      </Button>
    </Stack>
  )
}
