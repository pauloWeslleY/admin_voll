import { ReactNode } from 'react'
import * as S from './info-clinic-styles'

export const InfoClinicRoot = ({ children }: { children: ReactNode }) => {
  return (
    <S.InfoClinicWrap>
      <h2>Informações da Clinica</h2>

      {children}
    </S.InfoClinicWrap>
  )
}
