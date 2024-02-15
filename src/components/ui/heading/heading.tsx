import { ReactNode } from 'react'
import IconGraphic from '@/assets/icon_graphic.svg'
import IconAssessment from '@/assets/icon_assessment.svg'
import IconConsultation from '@/assets/icon_consultation.svg'
import * as S from './heading-styles'

type HeadingProps = {
  image?: string
  children: ReactNode
}

type ListImageProps = {
  graphic: string
  assessment: string
  consultation: string
}

export const Heading = ({ image, children }: HeadingProps) => {
  const listOfImages: ListImageProps = {
    graphic: IconGraphic,
    assessment: IconAssessment,
    consultation: IconConsultation,
  }

  return (
    <S.HeadingWrapper>
      {image && (
        <S.HeadingIcon image={listOfImages[image as keyof ListImageProps]} />
      )}
      {children}
    </S.HeadingWrapper>
  )
}
