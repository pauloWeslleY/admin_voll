import { addDoc } from 'firebase/firestore'
import { ptBR } from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { ClinicType, CreateClinicProps } from '@/components/types/clinic-props'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { toasts } from '@/components/ui'
import { nextStep } from '@/store/reducers'
import { collectionClinics } from '@/config/firebase/collections'

type AddClinicProps = { data: CreateClinicProps }

export const useHandleAddClinic = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const clinics = useAppSelector((state) => state.clinics)

  const handleAddClinic = async ({ data }: AddClinicProps) => {
    const exists = clinics.findIndex((props) => props.cnpj === data.cnpj)

    if (exists !== -1) {
      return toasts.error({ title: 'Clinica já cadastrada' })
    }

    const dataClinic: ClinicType = {
      ...data,
      owner: user.uid,
      createdAt: format(new Date(), "d 'de' MMMM 'de' yyyy", {
        locale: ptBR,
      }),
    }

    dispatch(nextStep())

    // if (Object.assign(clinic).length >= 7) {
    //   const [updateClinic] = clinics.filter((props) => props.cnpj === data.cnpj)
    //   const updatedDocRef = doc(db, 'clinics', updateClinic.id)
    //   await updateDoc(updatedDocRef, { ...data })
    //   toasts.success({ title: 'Clinica foi atualizada' })
    // }

    await addDoc(collectionClinics, dataClinic)
      .then(() => {
        toasts.success({ title: 'Clinica cadastrada' })
      })
      .catch((err) => console.error(err))
  }

  return { handleAddClinic }
}
