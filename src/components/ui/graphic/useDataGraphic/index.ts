import { ConsultationProps, ProfessionalProps } from '@/components/types'

type UseDataProps = {
  professional: ProfessionalProps[] | null
  consultation: ConsultationProps[] | null
}

export type DataGraphicProps = {
  name: string
  consultation: number
}

export const useDataGraphic = ({
  professional,
  consultation,
}: UseDataProps) => {
  let data: Array<DataGraphicProps> = []

  if (professional && consultation) {
    data = professional.map((props) => ({
      name: props.name,
      consultation: consultation.filter((consultations) =>
        consultations.professional.some((item) => item.name === props.name),
      ).length,
    }))
  }

  console.log(data)

  return data
}
