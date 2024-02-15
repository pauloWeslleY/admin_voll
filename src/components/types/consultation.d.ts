import { ProfessionalProps } from '.'

export type ConsultationProps = {
  id: string
  date: string
  hour: string
  professional: Pick<ProfessionalProps, 'name' | 'specialty'>[]
  patient: string
  modality: string
}
