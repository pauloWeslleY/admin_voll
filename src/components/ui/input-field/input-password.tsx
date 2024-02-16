import { ButtonProps } from '@mui/base/Button'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useInputPassword } from './useInputPassword'
import * as S from './input-styles'

type IconPasswordProps = ButtonProps

export const IconPassword = ({ ...rest }: IconPasswordProps) => {
  const { showPassword } = useInputPassword()

  console.log(showPassword)

  return (
    <S.InputAdornment>
      <S.IconButton
        {...rest}
        size="small"
        aria-label="toggle password visibility"
      >
        {showPassword ? (
          <VisibilityOff fontSize="small" />
        ) : (
          <Visibility fontSize="small" />
        )}
      </S.IconButton>
    </S.InputAdornment>
  )
}
