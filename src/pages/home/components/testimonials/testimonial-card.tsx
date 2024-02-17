import * as S from './testimonials-styles'

type TestimonialCardProps = {
  props: {
    testimonial: string
    author: string
  }
}

export const TestimonialCard = ({ props }: TestimonialCardProps) => {
  const { testimonial, author } = props

  return (
    <S.TestimonialCard>
      <p>{testimonial}</p>
      <span>{author}</span>
    </S.TestimonialCard>
  )
}
