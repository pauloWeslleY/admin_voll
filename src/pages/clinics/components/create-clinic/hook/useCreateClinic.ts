import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schemaClinic } from '../schema-clinic'
import { ClinicProps } from '@/components/types/clinic-props'
import { useAppDispatch } from '@/store/hook'
import { nextStep, setField } from '@/store/reducers'
import { useHandleAddClinic } from './useHandleAddClinic'

export const useCreateClinic = () => {
  const dispatch = useAppDispatch()
  const { handleAddClinic } = useHandleAddClinic()
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ClinicProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaClinic),
  })

  const stepNext = () => dispatch(nextStep())

  const createClinic = (data: ClinicProps) => {
    dispatch(setField({ data }))
    handleAddClinic({ data })
  }

  return {
    reset,
    register,
    errors,
    handleSubmit,
    createClinic,
    control,
    stepNext,
  }
}
