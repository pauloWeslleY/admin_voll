import { ProfessionalProps } from '@/components/types'
import { useFetch } from '../useFetch'

export const useDataProfessional = () => {
  const dataProfessional = useFetch<ProfessionalProps[]>({
    url: 'professionals',
  })

  const loadProfessional = () => [
    {
      id: 1,
      image: 'https://imgur.com/imkS67m.png',
      name: 'Ana Luiza',
      specialty: 'Clínico Geral',
      note: 4.5,
    },
    {
      id: 2,
      image: 'https://imgur.com/iyFgXHb.png',
      name: 'Caroline Carvalho',
      specialty: 'Nutricionista',
      note: 4.6,
    },
    {
      id: 3,
      image: 'https://imgur.com/ho9CUwp.png',
      name: 'Camila Fernanda',
      specialty: 'Oftamologista',
      note: 4.3,
    },
    {
      id: 4,
      image: 'https://imgur.com/sVAFzFy.png',
      name: 'Bruno Divino',
      specialty: 'Psiquiatra',
      note: 4.7,
    },
  ]

  return { dataProfessional, loadProfessional }
}
