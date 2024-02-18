import { Stepper } from '@/components/ui'
import { useAppSelector } from '@/store/hook'
import { CreateClinic } from '../create-clinic/create-clinic'
import { InfoClinic } from '../info-clinic/info-clinic'

export const FormStepper = () => {
  const { step, data } = useAppSelector((state) => state.stepper)
  const steps = ['Dados da clinica', 'Endereço', 'Verificando']

  return (
    <Stepper.Root>
      <Stepper.Head steps={steps} />
      {step === steps.length ? (
        <Stepper.Body />
      ) : (
        <Stepper.Content>
          {Object.keys(data).length === 7 && (
            <>
              {step === 2 && (
                <InfoClinic.Root>
                  <InfoClinic.Content />
                  <InfoClinic.Address />
                </InfoClinic.Root>
              )}
            </>
          )}

          <CreateClinic />

          <Stepper.Actions />
        </Stepper.Content>
      )}
    </Stepper.Root>
  )
}
