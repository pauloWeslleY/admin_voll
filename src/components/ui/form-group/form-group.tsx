import { LabelHTMLAttributes, ReactNode } from 'react'
import { red } from '@mui/material/colors'
import * as S from './form-group-styles'

type FormGroupProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode
  props: {
    label: string
    errors: string | undefined
  }
}

export const FormGroup = ({ children, props, ...rest }: FormGroupProps) => {
  const { label, errors } = props

  return (
    <S.FormControl error={!!errors}>
      <label {...rest} style={{ color: errors ? red[500] : '' }}>
        {label}
      </label>

      {children}

      <S.FormHelper>{errors}</S.FormHelper>
    </S.FormControl>
  )
}
