import { Stack } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { prevStep } from '@/store/reducers'
import { COLORS, FONTS } from '@/styles'
import { Button } from '..'

export const StepperActions = () => {
  const { step } = useAppSelector((state) => state.stepper)
  const dispatch = useAppDispatch()

  return (
    <Stack flexDirection="row" justifyContent="flex-end" sx={{ pt: 2 }}>
      <Button
        disabled={step === 0}
        onClick={() => dispatch(prevStep())}
        sx={{
          border: 'none',
          background: 'transparent',
          color: COLORS.blue[400],
          fontSize: FONTS.fontSizes.md,
        }}
      >
        <ArrowBackIosIcon sx={{ width: 18, height: 18 }} />
        Voltar
      </Button>
    </Stack>
  )
}
