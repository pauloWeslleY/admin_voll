import { ForwardedRef, forwardRef } from 'react'
import { Input as BaseInput, InputProps } from '@mui/base/Input'
import { InputRoot, InputElement } from './input-styles'
import { InputType } from './input-type'

export const InputField = forwardRef<HTMLInputElement, InputType>(
  ({ slots, ...other }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <BaseInput
      slots={{
        root: InputRoot,
        input: InputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  ),
)

InputField.displayName = 'InputField'
