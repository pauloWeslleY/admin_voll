import { ConsultationProps } from '@/components/types'
import { useFetch } from '../useFetch'

export const useDataConsultation = () => {
  const consultationData = useFetch<ConsultationProps[]>({ url: 'queries' })

  const loadConsultationQueries = () => [
    {
      id: '1',
      date: '2022-01-24',
      hour: '08:30',
      professional: [
        {
          name: 'Ana Luiza',
          specialty: 'Clínico Geral',
        },
      ],
      patient: 'Larissa Gabriela',
      modality: 'Particular',
    },
    {
      id: '2',
      date: '2022-01-25',
      hour: '08:30',
      professional: [
        {
          name: 'Caroline Carvalho',
          specialty: 'Nutricionista',
        },
      ],
      patient: 'Guilherme Lira',
      modality: 'Particular',
    },
  ]

  return { consultationData, loadConsultationQueries }
}
