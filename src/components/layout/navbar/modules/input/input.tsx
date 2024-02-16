import { useTheme } from '@mui/material'
import { InputHTMLAttributes, forwardRef } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import * as S from './input-styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const theme = useTheme()

    return (
      <S.InputField>
        <input {...props} type="text" ref={ref} />

        <SearchIcon sx={{ color: theme.palette.primary.main }} />
      </S.InputField>
    )
  },
)

Input.displayName = 'Input'
