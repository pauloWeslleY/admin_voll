import { TestimonialCard } from './testimonial-card'
import { useHome } from '../../useHome'
import * as S from './testimonials-styles'

export const Testimonials = () => {
  const { TESTIMONIAL } = useHome()

  return (
    <S.TestimonialsWrapper>
      <h2>Depoimentos</h2>

      <S.TestimonialCardWrapper>
        <TestimonialCard
          props={{
            testimonial: TESTIMONIAL.testimonial,
            author: TESTIMONIAL.author,
          }}
        />
        <S.Separator />
        <TestimonialCard
          props={{
            testimonial: TESTIMONIAL.testimonial,
            author: TESTIMONIAL.author,
          }}
        />
        <S.Separator />
        <TestimonialCard
          props={{
            testimonial: TESTIMONIAL.testimonial,
            author: TESTIMONIAL.author,
          }}
        />
      </S.TestimonialCardWrapper>
    </S.TestimonialsWrapper>
  )
}
