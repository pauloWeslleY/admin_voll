import { z } from 'zod'
import { phoneRegex, cnpjRegex, cepRegex } from '@/utils/regex'

export const schemaClinic = z.object({
  name: z.string().min(1, { message: 'Informe um nome válido' }),
  email: z.string().email({ message: 'Informe um email válido' }),
  phone: z.string().refine((value) => phoneRegex.test(value), {
    message: 'Informe um numero de telefone válido',
  }),
  cnpj: z.string().refine((value) => cnpjRegex.test(value), {
    message: 'Formato de CNPJ inválido',
  }),
  corporateReason: z
    .string()
    .min(1, { message: 'Informe um razão social válida' }),
  address: z.object({
    street: z.string().min(1, { message: 'Informe o nome da rua' }),
    complement: z.string().min(1, { message: 'Informe o complemento' }),
    number: z
      .number({
        required_error: 'Informe o número',
        invalid_type_error: 'Digite o número da residência',
      })
      .positive('Por favor digite um número válido'),
    state: z.string().min(1, { message: 'Informe o Estado' }),
    cep: z.string().refine((value) => cepRegex.test(value), {
      message: 'Formato de CEP inválido',
    }),
  }),
  role: z.string(),
})
