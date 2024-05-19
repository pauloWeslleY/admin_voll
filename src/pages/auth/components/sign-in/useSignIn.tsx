import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInProps } from './sign-in-props'
import { schemaSignIn } from './schema-sign-in'
import { useAuthentication } from '@/hooks/useAuthentication'

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
