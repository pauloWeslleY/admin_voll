import { ComponentProps, ReactNode } from 'react'
import * as S from './stepper.styles'

type StepperRootProps = ComponentProps<typeof S.StepperWrap> & {
  children: ReactNode
}

export const StepperRoot = ({ children, ...rest }: StepperRootProps) => {
  return <S.StepperWrap {...rest}>{children}</S.StepperWrap>
}
