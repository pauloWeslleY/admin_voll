import { addDoc } from 'firebase/firestore'
import { ptBR } from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { ClinicProps } from '@/components/types/clinic-props'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { toasts } from '@/components/ui'
import { nextStep } from '@/store/reducers'
import { collectionClinics } from '@/config/firebase/collections'

type AddClinicProps = { data: ClinicProps }

export const useHandleAddClinic = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const clinics = useAppSelector((state) => state.clinics)

  const handleAddClinic = async ({ data }: AddClinicProps) => {
    const exists = clinics.findIndex((props) => props.cnpj === data.cnpj)

    if (exists !== -1) {
      return toasts.error({ title: 'Clinica já cadastrada' })
    }

    const dataClinic = {
      ...data,
      owner: user.uid,
      createdAt: format(new Date(), "d 'de' MMMM 'de' yyyy", {
        locale: ptBR,
      }),
    }

    dispatch(nextStep())

    await addDoc(collectionClinics, dataClinic)
      .then(() => {
        toasts.success({ title: 'Clinica cadastrada' })
      })
      .catch((err) => console.error(err))
  }

  return { handleAddClinic }
}
