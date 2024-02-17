import { CardProps } from './card-props'
import * as S from './card-styles'

type CardItemProps = {
  card: CardProps
}

export const CardItem = ({ card }: CardItemProps) => {
  const { icon: Icon, text } = card

  return (
    <S.CardItem elevation={5}>
      <Icon sx={{ width: 72, height: 72 }} />
      <p>{text}</p>
    </S.CardItem>
  )
}
