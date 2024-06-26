import { grey } from '@mui/material/colors'
import { ElementType } from 'react'
import * as S from './input-styles'

type InputIconProps = { icon: ElementType }

export const InputIcon = ({ icon: Icon }: InputIconProps) => {
  return (
    <S.InputAdornment>
      <Icon sx={{ color: grey[800] }} />
    </S.InputAdornment>
  )
}
