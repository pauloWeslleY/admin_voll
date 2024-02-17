import {
  Button,
  FormHelperText,
  IconPassword,
  InputField,
  Label,
} from '@/components/ui'
import { useAuth } from '../../hooks/useAuth'
import { useSignUp } from './useSignUp'
import * as S from './sign-up-styles'

export const SignUp = () => {
  const { register, signUp, handleSubmit, errors } = useSignUp()
  const { showPassword, handleClickShowPassword } = useAuth()

  return (
    <form onSubmit={handleSubmit(signUp)} autoComplete="off">
      <S.FormControl error={!!errors.username?.message}>
        <Label
          htmlFor="username"
          props={{
            label: 'Nome',
            errors: errors.username?.message,
          }}
        />

        <InputField
          {...register('username')}
          id="username"
          type="text"
          placeholder="Insira seu nome"
          error={!!errors.username?.message}
        />
        <FormHelperText errors={errors.username?.message} />
      </S.FormControl>

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

      <S.FormControl error={!!errors.phone?.message}>
        <Label
          htmlFor="phone"
          props={{
            label: 'Telefone',
            errors: errors.phone?.message,
          }}
        />

        <InputField
          {...register('phone')}
          id="phone"
          type="text"
          placeholder="Insira seu endereço de phone"
          error={!!errors.phone?.message}
        />
        <FormHelperText errors={errors.phone?.message} />
      </S.FormControl>

      <S.FormControl error={!!errors.cpf?.message}>
        <Label
          htmlFor="cpf"
          props={{
            label: 'Cpf',
            errors: errors.cpf?.message,
          }}
        />

        <InputField
          {...register('cpf')}
          id="cpf"
          type="text"
          placeholder="Insira seu cpf"
          error={!!errors.cpf?.message}
        />
        <FormHelperText errors={errors.cpf?.message} />
      </S.FormControl>

      <S.FormControl error={!!errors.cpf?.message}>
        <Label
          htmlFor="photoUrl"
          props={{
            label: 'Foto',
            errors: errors.cpf?.message,
          }}
        />

        <InputField
          {...register('photoUrl')}
          id="photoUrl"
          type="text"
          placeholder="Insira a url da foto"
          error={!!errors.cpf?.message}
        />
        <FormHelperText errors={errors.cpf?.message} />
      </S.FormControl>

      <Button
        type="submit"
        label="Cadastrar"
        sx={{ width: 280, marginTop: 8 }}
      />
    </form>
  )
}
