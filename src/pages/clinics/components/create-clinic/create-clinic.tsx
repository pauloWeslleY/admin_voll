import { Controller } from 'react-hook-form'
import { Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Button, FormGroup, InputField, InputIcon } from '@/components/ui'
import { useCreateClinic } from './hook/useCreateClinic'
import { formatCNPJ } from '@/utils/format-cnpj/format-cnpj'
import { useAppSelector } from '@/store/hook'
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
              defaultValue=""
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
              type={'text'}
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
              type={'text'}
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
              type={'text'}
              error={!!errors.phone?.message}
            />
          </FormGroup>

          <FormGroup
            htmlFor="cep"
            props={{
              label: 'CEP',
              errors: errors.cep?.message,
            }}
            sx={{ gridColumn: '2 / 4' }}
          >
            <InputField
              {...register('cep')}
              id="cep"
              placeholder="Digite o cep da clinica"
              type={'text'}
              error={!!errors.cep?.message}
              startAdornment={<InputIcon icon={LocationOnIcon} />}
            />
          </FormGroup>

          <S.FormContainer>
            <label>Endereço</label>

            <FormGroup
              htmlFor="street"
              props={{
                label: '',
                errors: errors.address?.street?.message,
              }}
              sx={{ gridColumn: 'span 3' }}
            >
              <InputField
                {...register('address.street')}
                placeholder="Digite o nome da rua"
                id="street"
                type={'text'}
                error={!!errors.address?.street?.message}
              />
            </FormGroup>

            <FormGroup
              htmlFor="number"
              props={{
                label: '',
                errors: errors.address?.number?.message,
              }}
              sx={{ gridColumn: '1 / 3' }}
            >
              <InputField
                {...register('address.number')}
                placeholder="Digite o numero da clinica"
                id="number"
                type={'text'}
                error={!!errors.address?.number?.message}
              />
            </FormGroup>

            <FormGroup
              htmlFor="complement"
              props={{
                label: '',
                errors: errors.address?.complement?.message,
              }}
              sx={{ gridColumn: 'span 1' }}
            >
              <InputField
                {...register('address.complement')}
                placeholder="Digite o complemento"
                id="complement"
                type={'text'}
                error={!!errors.address?.complement?.message}
              />
            </FormGroup>

            <FormGroup
              htmlFor="state"
              props={{
                label: '',
                errors: errors.address?.state?.message,
              }}
              sx={{ gridColumn: 'span 1' }}
            >
              <InputField
                {...register('address.state')}
                placeholder="Digite o estado"
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
          <S.FormLink onClick={stepNext}>Avançar</S.FormLink>
        ) : (
          <>
            {step === 2 ? (
              <S.FormLink onClick={stepNext}>Avançar</S.FormLink>
            ) : (
              <>
                <Button
                  type="submit"
                  label="Cadastrar"
                  sx={{ width: 200, py: 2, mt: 5 }}
                />
              </>
            )}
          </>
        )}
      </Stack>
    </form>
  )
}
