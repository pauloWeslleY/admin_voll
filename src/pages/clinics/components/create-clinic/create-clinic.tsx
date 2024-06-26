import { Controller } from 'react-hook-form'
import { Stack } from '@mui/material'
import MuiButton from '@mui/material/Button'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Button, FormGroup, InputField, InputIcon } from '@/components/ui'
import { useCreateClinic } from './hook/useCreateClinic'
import { formatCNPJ } from '@/utils/format-cnpj/format-cnpj'
import { useAppSelector } from '@/store/hook'
import { spacing } from '@/styles/utilities'
import * as S from './create-clinic-styles'

export const CreateClinic = () => {
  const { step } = useAppSelector((state) => state.stepper)
  const { errors, control, register, createClinic, handleSubmit, stepNext } =
    useCreateClinic()

  return (
    <form onSubmit={handleSubmit(createClinic)}>
      {step === 0 && (
        <>
          <FormGroup
            htmlFor="name"
            props={{ label: 'Nome', errors: errors.name?.message }}
            sx={{ gridColumn: '1 / 2' }}
          >
            <InputField
              {...register('name')}
              id="name"
              type="text"
              placeholder="Digite o nome da clinica"
              error={!!errors.name?.message}
            />
          </FormGroup>

          <FormGroup
            htmlFor="cnpj"
            props={{ label: 'CNPJ', errors: errors.cnpj?.message }}
            sx={{ gridColumn: '2 / 4' }}
          >
            <Controller
              name="cnpj"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  id="cnpj"
                  type="text"
                  placeholder="Digite o cnpj da clinica"
                  error={!!errors.cnpj?.message}
                  onChange={(e) => field.onChange(formatCNPJ(e.target.value))}
                />
              )}
            />
          </FormGroup>

          <FormGroup
            htmlFor="email"
            props={{ label: 'Email', errors: errors.email?.message }}
            sx={{ gridColumn: 'span 3' }}
          >
            <InputField
              {...register('email')}
              id="email"
              placeholder="Digite o email da clinica"
              type="text"
              error={!!errors.email?.message}
            />
          </FormGroup>

          <FormGroup
            htmlFor="corporateReason"
            props={{
              label: 'Razão social',
              errors: errors.corporateReason?.message,
            }}
            sx={{ gridColumn: 'span 3' }}
          >
            <InputField
              {...register('corporateReason')}
              id="corporateReason"
              placeholder="Digite a razão social"
              type="text"
              error={!!errors.corporateReason?.message}
            />
          </FormGroup>
        </>
      )}

      {step === 1 && (
        <>
          <FormGroup
            htmlFor="phone"
            props={{
              label: 'Telefone',
              errors: errors.phone?.message,
            }}
            sx={{ gridColumn: '1 / 2' }}
          >
            <InputField
              {...register('phone')}
              id="phone"
              placeholder="(xx) 0000-0000"
              type="text"
              error={!!errors.phone?.message}
            />
          </FormGroup>

          <FormGroup
            htmlFor="cep"
            props={{
              label: 'CEP',
              errors: errors.address?.cep?.message,
            }}
            sx={{ gridColumn: '2 / 4' }}
          >
            <InputField
              {...register('address.cep')}
              id="cep"
              placeholder="Digite o cep da clinica"
              type="text"
              error={!!errors.address?.cep?.message}
              startAdornment={<InputIcon icon={LocationOnIcon} />}
            />
          </FormGroup>

          <S.FormContainer>
            <label>Endereço</label>

            <FormGroup
              htmlFor="street"
              props={{
                errors: errors.address?.street?.message,
              }}
              sx={{ gridColumn: 'span 3' }}
            >
              <InputField
                {...register('address.street')}
                placeholder="Digite o nome da rua"
                id="street"
                type="text"
                error={!!errors.address?.street?.message}
              />
            </FormGroup>

            <FormGroup
              htmlFor="number"
              props={{
                errors: errors.address?.number?.message,
              }}
              sx={{ gridColumn: '1 / 3' }}
            >
              <InputField
                {...register('address.number', {
                  required: 'Este campo é obrigatório',
                  min: {
                    value: 1,
                    message: 'O número deve ser maior que 1',
                  },
                  valueAsNumber: true,
                })}
                placeholder="Número"
                id="number"
                type="number"
                error={!!errors.address?.number?.message}
              />
            </FormGroup>

            <FormGroup
              htmlFor="complement"
              props={{
                errors: errors.address?.complement?.message,
              }}
              sx={{ gridColumn: 'span 1' }}
            >
              <InputField
                {...register('address.complement')}
                placeholder="Digite o complemento"
                id="complement"
                type="text"
                error={!!errors.address?.complement?.message}
              />
            </FormGroup>

            <FormGroup
              htmlFor="state"
              props={{
                errors: errors.address?.state?.message,
              }}
              sx={{ gridColumn: 'span 1' }}
            >
              <InputField
                {...register('address.state')}
                placeholder="Estado"
                id="state"
                type={'text'}
                error={!!errors.address?.state?.message}
              />
            </FormGroup>
          </S.FormContainer>
        </>
      )}

      <Stack sx={{ gridColumn: 'span 4', placeSelf: 'center' }}>
        {step === 0 ? (
          <Button onClick={stepNext} sx={{ marginTop: spacing(6) }}>
            Avançar
          </Button>
        ) : (
          <>
            {step === 2 ? (
              <Button onClick={stepNext} sx={{ marginTop: spacing(6) }}>
                Avançar
              </Button>
            ) : (
              <MuiButton type="submit" sx={{ width: 200, py: 2, mt: 5 }}>
                Cadastrar
              </MuiButton>
            )}
          </>
        )}
      </Stack>
    </form>
  )
}
