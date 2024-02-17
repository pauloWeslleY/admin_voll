import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { SignUpProps } from './sign-up-props'
import { useAuthentication } from '../../hooks/useAuthentication'

const phoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

export const schemaSignUp = z.object({
  username: z.string().min(5, { message: 'Informe um nome válido' }),
  email: z.string().email({ message: 'Informe um email válido' }),
  password: z.string().min(6, { message: 'Informe sua senha' }),
  phone: z.string().refine((value) => phoneRegex.test(value), {
    message: 'Informe um numero de telefone válido',
  }),
  cpf: z.string().refine((value) => cpfRegex.test(value), {
    message: 'Formato de CPF inválido',
  }),
  photoUrl: z.string().url({ message: 'Informe uma url válida' }),
})

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
