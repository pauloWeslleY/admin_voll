import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { SignInProps } from './sign-in-props'

export const schemaSignIn = z.object({
  email: z.string().email({ message: 'Informe um email válido' }),
  password: z.string().min(6, { message: 'Informe sua senha' }),
})

export const useSignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaSignIn),
  })

  console.log('errors ==> ', errors)

  const signIn = (data: SignInProps) => {
    console.log('data ==> ', data)
  }

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword)
  }

  return {
    signIn,
    register,
    errors,
    handleSubmit,
    showPassword,
    handleClickShowPassword,
  }
}
