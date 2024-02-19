import { FormGroup, IconPassword, InputField } from '@/components/ui'
import { useAuth } from '../../hooks/useAuth'
import { useSignUp } from './useSignUp'
import { Button } from '@mui/material'

export const SignUp = () => {
  const { register, signUp, handleSubmit, errors } = useSignUp()
  const { showPassword, handleClickShowPassword } = useAuth()

  return (
    <form onSubmit={handleSubmit(signUp)} autoComplete="off">
      <FormGroup
        htmlFor="username"
        props={{ label: 'Nome', errors: errors.username?.message }}
      >
        <InputField
          {...register('username')}
          id="username"
          type="text"
          placeholder="Insira seu nome"
          error={!!errors.username?.message}
        />
      </FormGroup>

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

      <FormGroup
        htmlFor="phone"
        props={{ label: 'Telefone', errors: errors.phone?.message }}
      >
        <InputField
          {...register('phone')}
          id="phone"
          type="text"
          placeholder="Insira seu telefone"
          error={!!errors.phone?.message}
        />
      </FormGroup>

      <FormGroup
        htmlFor="cpf"
        props={{ label: 'CPF', errors: errors.cpf?.message }}
      >
        <InputField
          {...register('cpf')}
          id="cpf"
          type="text"
          placeholder="Insira seu cpf"
          error={!!errors.cpf?.message}
        />
      </FormGroup>

      <FormGroup
        htmlFor="photoUrl"
        props={{ label: 'Foto', errors: errors.photoUrl?.message }}
      >
        <InputField
          {...register('photoUrl')}
          id="photoUrl"
          type="text"
          placeholder="Insira a url da foto"
          error={!!errors.photoUrl?.message}
        />
      </FormGroup>

      <Button type="submit" sx={{ width: 280, marginTop: 8 }}>
        Cadastrar
      </Button>
    </form>
  )
}
