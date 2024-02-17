import { Button, FormGroup, IconPassword, InputField } from '@/components/ui'
import { useSignIn } from './useSignIn'
import { useAuth } from '../../hooks/useAuth'

export const SignIn = () => {
  const { register, handleSubmit, signIn, errors } = useSignIn()
  const { showPassword, handleClickShowPassword } = useAuth()

  return (
    <form onSubmit={handleSubmit(signIn)} autoComplete="off">
      <FormGroup
        htmlFor="email"
        props={{ label: 'Email', errors: errors.email?.message }}
      >
        <InputField
          {...register('email')}
          id="email"
          type="email"
          placeholder="Insira seu endereço de email"
          error={!!errors.email?.message}
        />
      </FormGroup>

      <FormGroup
        htmlFor="password"
        props={{ label: 'Senha', errors: errors.password?.message }}
      >
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
      </FormGroup>

      <Button type="submit" label="Entrar" sx={{ width: 280, marginTop: 8 }} />
    </form>
  )
}
