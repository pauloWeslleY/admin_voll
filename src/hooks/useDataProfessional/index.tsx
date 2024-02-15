import { ProfessionalProps } from '@/components/types'
import { useFetch } from '../useFetch'

export const useDataProfessional = () => {
  return useFetch<ProfessionalProps[]>({ url: 'professionals' })
}
