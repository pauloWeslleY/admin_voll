import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpProps } from './sign-up-props'
import { useAuthentication } from '@/hooks/useAuthentication'
import { schemaSignUp } from './schema-sign-up'

export const useSignUp = () => {
  const { handleSignUp } = useAuthentication()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaSignUp),
  })

  const signUp = (data: SignUpProps) => {
    handleSignUp(data)
    reset()
  }

  return {
    errors,
    signUp,
    register,
    handleSubmit,
  }
}
