import { LabelHTMLAttributes, ReactNode } from 'react'
import { SxProps, Theme } from '@mui/material'
import { red } from '@mui/material/colors'
import * as S from './form-group-styles'

type FormGroupProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode
  sx?: SxProps<Theme>
  props: {
    label: string
    errors: string | undefined
  }
}

export const FormGroup = ({ children, props, sx, ...rest }: FormGroupProps) => {
  const { label, errors } = props

  return (
    <S.FormControl error={!!errors} sx={sx}>
      <label {...rest} style={{ color: errors ? red[500] : '' }}>
        {label}
      </label>

      {children}

      <S.FormHelper>{errors}</S.FormHelper>
    </S.FormControl>
  )
}
