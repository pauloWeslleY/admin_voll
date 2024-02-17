import { CardItem } from './card-item'
import { CardProps } from './card-props'
import * as S from './card-styles'

type CardType = {
  card: CardProps[]
}

export const Card = ({ card }: CardType) => {
  return (
    <S.CardWrapper>
      {card.map((props, index) => (
        <CardItem key={index} card={props} />
      ))}
    </S.CardWrapper>
  )
}
