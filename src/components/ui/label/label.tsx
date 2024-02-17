import { LabelHTMLAttributes } from 'react'
import { red } from '@mui/material/colors'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  props: {
    label: string
    errors: string | undefined
  }
}

export const Label = ({ props: { errors, label }, ...rest }: LabelProps) => (
  <label {...rest} style={{ color: errors ? red[500] : '' }}>
    {label}
  </label>
)
