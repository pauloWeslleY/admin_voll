import { z } from 'zod'
import { phoneRegex, cpfRegex } from '@/utils/regex'

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
