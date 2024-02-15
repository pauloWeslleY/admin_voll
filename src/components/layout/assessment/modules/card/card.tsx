import { ProfessionalProps } from '@/components/types'
import * as S from './card-styles'

type CardAssessmentProps = {
  card: ProfessionalProps
}

export const CardAssessment = ({ card }: CardAssessmentProps) => {
  console.log(card)

  return (
    <S.Card>
      <div>
        <img
          src={card.image}
          alt={`Foto de Perfil do Profissional ${card.name}`}
        />
        <p>hello</p>
      </div>
    </S.Card>
  )
}
