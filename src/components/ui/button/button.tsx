import { ComponentProps } from 'react'
import * as S from './button-styles'

type ButtonProps = ComponentProps<typeof S.Button> & {
  label: string
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return <S.Button {...rest}>{label}</S.Button>
}
