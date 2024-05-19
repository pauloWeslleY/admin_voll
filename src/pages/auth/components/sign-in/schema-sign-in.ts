import { z } from 'zod'

export const schemaSignIn = z.object({
  email: z.string().email({ message: 'Informe um email válido' }),
  password: z.string().min(6, { message: 'Informe sua senha' }),
})
