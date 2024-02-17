import { forwardRef } from 'react'
import { Input as BaseInput } from '@mui/base/Input'
import { InputRoot, InputElement } from './input-styles'
import { InputType } from './input-type'

export const InputField = forwardRef<HTMLInputElement, InputType>(
  ({ slots, ...other }, ref) => (
    <BaseInput
      ref={ref}
      slots={{
        root: InputRoot,
        input: InputElement,
        ...slots,
      }}
      {...other}
    />
  ),
)

InputField.displayName = 'InputField'
