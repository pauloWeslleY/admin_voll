import { ComponentProps, ReactNode } from 'react'
import * as S from './stepper.styles'

type StepperContentProps = ComponentProps<typeof S.StepperContent> & {
  children: ReactNode
}

export const StepperContent = ({ children, ...rest }: StepperContentProps) => (
  <S.StepperContent {...rest}>{children}</S.StepperContent>
)
