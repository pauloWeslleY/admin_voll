import { red } from '@mui/material/colors'
import {
  Button,
  FormHelperText,
  IconPassword,
  InputField,
} from '@/components/ui'
import { useSignIn } from './useSignIn'
import * as S from './sign-in-styles'

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    signIn,
    errors,
    showPassword,
    handleClickShowPassword,
  } = useSignIn()

  return (
    <form onSubmit={handleSubmit(signIn)} autoComplete="off">
      <S.FormControl error={!!errors.email?.message}>
        <label
          htmlFor="email"
          style={{ color: errors.email?.message ? red[500] : '' }}
        >
          Email
        </label>
        <InputField
          {...register('email')}
          id="email"
          type="email"
          placeholder="Insira seu endereço de email"
          error={!!errors.email?.message}
        />
        <FormHelperText errors={errors.email?.message} />
      </S.FormControl>

      <S.FormControl
        sx={{ marginBottom: 8, marginTop: 4 }}
        error={!!errors.password?.message}
      >
        <label
          htmlFor="password"
          style={{ color: errors.password?.message ? red[500] : '' }}
        >
          Senha
        </label>
        <InputField
          {...register('password')}
          id="password"
          placeholder="Insira sua senha"
          type={showPassword ? 'text' : 'password'}
          error={!!errors.password?.message}
          endAdornment={
            <IconPassword
              showPassword={showPassword}
              onClick={handleClickShowPassword}
            />
          }
        />
        <FormHelperText errors={errors.password?.message} />
      </S.FormControl>

      <Button type="submit" label="Entrar" sx={{ width: 280 }} />
    </form>
  )
}
