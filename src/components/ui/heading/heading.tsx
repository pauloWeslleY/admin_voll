import { ComponentProps, ReactNode, useMemo } from 'react'
import { Icon } from '..'
import * as S from './heading-styles'

type HeadingProps = ComponentProps<typeof S.HeadingWrapper> & {
  image?: 'graphic' | 'assessment' | 'consultation'
  children: ReactNode
}

export const Heading = ({ image, children, ...rest }: HeadingProps) => {
  const IconHeading = useMemo(() => {
    switch (image) {
      case 'assessment':
        return <Icon.Assessment />

      case 'graphic':
        return <Icon.Graphic />

      case 'consultation':
        return <Icon.Consultation />

      default:
        return null
    }
  }, [image])

  return (
    <S.HeadingWrapper {...rest}>
      {image && IconHeading}

      {children}
    </S.HeadingWrapper>
  )
}
