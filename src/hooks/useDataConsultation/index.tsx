import { ConsultationProps } from '@/components/types'
import { useFetch } from '../useFetch'

export const useDataConsultation = () => {
  return useFetch<ConsultationProps[]>({ url: 'queries' })
}
