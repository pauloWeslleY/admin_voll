import {
  Button,
  FormHelperText,
  IconPassword,
  InputField,
  Label,
} from '@/components/ui'
import { useSignIn } from './useSignIn'
import { useAuth } from '../../hooks/useAuth'
import * as S from './sign-in-styles'

export const SignIn = () => {
  const { register, handleSubmit, signIn, errors } = useSignIn()
  const { showPassword, handleClickShowPassword } = useAuth()

  return (
    <form onSubmit={handleSubmit(signIn)} autoComplete="off">
      <S.FormControl error={!!errors.email?.message}>
        <Label
          htmlFor="email"
          props={{
            label: 'Email',
            errors: errors.email?.message,
          }}
        />

        <InputField
          {...register('email')}
          id="email"
          type="email"
          placeholder="Insira seu endereço de email"
          error={!!errors.email?.message}
        />
        <FormHelperText errors={errors.email?.message} />
      </S.FormControl>

      <S.FormControl error={!!errors.password?.message}>
        <Label
          htmlFor="password"
          props={{
            label: 'Senha',
            errors: errors.password?.message,
          }}
        />

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

      <Button type="submit" label="Entrar" sx={{ width: 280, marginTop: 8 }} />
    </form>
  )
}
