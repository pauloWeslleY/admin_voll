import { useAppSelector } from '@/store/hook'
import * as S from './stepper.styles'

type StepperHeaderProps = {
  steps: string[]
}

export const StepperHeader = ({ steps }: StepperHeaderProps) => {
  const { step } = useAppSelector((state) => state.stepper)

  return (
    <S.Stepper activeStep={step}>
      {steps.map((label) => (
        <S.Step key={label}>
          <S.StepLabel>{label}</S.StepLabel>
        </S.Step>
      ))}
    </S.Stepper>
  )
}
