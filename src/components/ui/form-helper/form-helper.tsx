import { ComponentProps } from 'react'
import * as S from './form-helper-styles'

type FormHelperProps = ComponentProps<typeof S.FormHelper> & {
  errors: string | undefined
}

export const FormHelperText = ({ errors, ...rest }: FormHelperProps) => {
  return <S.FormHelper {...rest}>{errors}</S.FormHelper>
}
