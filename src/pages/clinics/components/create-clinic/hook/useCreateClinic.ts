import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schemaClinic } from '../schema-clinic'
import { CreateClinicProps } from '@/components/types/clinic-props'
import { useAppDispatch } from '@/store/hook'
import { nextStep, setField } from '@/store/reducers'
import { useHandleAddClinic } from './useHandleAddClinic'

export const useCreateClinic = () => {
  const dispatch = useAppDispatch()
  const { handleAddClinic } = useHandleAddClinic()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClinicProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaClinic),
  })

  const stepNext = () => dispatch(nextStep())

  const createClinic = (data: CreateClinicProps) => {
    dispatch(setField({ data }))
    handleAddClinic({ data })
  }

  return {
    errors,
    register,
    handleSubmit,
    createClinic,
    control,
    stepNext,
  }
}
