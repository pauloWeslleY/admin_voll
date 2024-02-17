import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { SignInProps } from './sign-in-props'
import { useAuthentication } from '../../hooks/useAuthentication'

export const schemaSignIn = z.object({
  email: z.string().email({ message: 'Informe um email válido' }),
  password: z.string().min(6, { message: 'Informe sua senha' }),
})

export const useSignIn = () => {
  const { handleSignIn } = useAuthentication()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaSignIn),
  })

  const signIn = (data: SignInProps) => {
    handleSignIn(data)
    reset()
  }

  return {
    signIn,
    register,
    errors,
    handleSubmit,
  }
}
