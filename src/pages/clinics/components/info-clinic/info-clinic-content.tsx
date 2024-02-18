import { useAppSelector } from '@/store/hook'
import * as S from './info-clinic-styles'

export const InfoClinicContent = () => {
  const { data } = useAppSelector((state) => state.stepper)

  return (
    <S.InfoClinicContent>
      <S.InfoClinic gridCol="1 / 3">
        <h3>Nome</h3>
        <p>{data.name}</p>
      </S.InfoClinic>
      <S.InfoClinic gridCol="3 / 4">
        <h3>CNPJ</h3>
        <p>{data.cnpj}</p>
      </S.InfoClinic>
      <S.InfoClinic gridCol="span 3">
        <h3>Razão Social</h3>
        <p>{data.corporateReason}</p>
      </S.InfoClinic>
      <S.InfoClinic gridCol="1 / 2">
        <h3>Email</h3>
        <p>{data.email}</p>
      </S.InfoClinic>
      <S.InfoClinic gridCol="2 / 4">
        <h3>Telefone</h3>
        <p>{data.phone}</p>
      </S.InfoClinic>
    </S.InfoClinicContent>
  )
}
