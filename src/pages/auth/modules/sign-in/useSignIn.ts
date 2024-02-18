import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInProps } from './sign-in-props'
import { useAuthentication } from '../../hooks/useAuthentication'
import { schemaSignIn } from './schema-sing-in'

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
