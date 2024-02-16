import { Avatar, Rating, useTheme } from '@mui/material'
import { ProfessionalProps } from '@/components/types'
import * as S from './card-styles'

type CardAssessmentProps = {
  card: ProfessionalProps
}

export const CardAssessment = ({ card }: CardAssessmentProps) => {
  const theme = useTheme()

  return (
    <S.Card>
      <S.CardContent>
        <Avatar
          src={card.image}
          alt={`Foto de Perfil do Profissional ${card.name}`}
          sx={{
            width: 65,
            height: 65,
            border: `2px solid ${theme.palette.primary.light}`,
          }}
        />

        <S.CardInfo>
          <h3>{card.name}</h3>
          <p>{card.specialty}</p>
        </S.CardInfo>
      </S.CardContent>

      <Rating name="simple-controlled" value={card.note} readOnly={true} />
    </S.Card>
  )
}
