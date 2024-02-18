import { useAppSelector } from '@/store/hook'
import * as S from './info-clinic-styles'

export const InfoClinicAddress = () => {
  const { data } = useAppSelector((state) => state.stepper)

  return (
    <S.InfoClinicContent>
      <S.InfoClinic gridCol="1 / 3">
        <h3>Rua</h3>
        <p>{data.address.street}</p>
      </S.InfoClinic>
      <S.InfoClinic gridCol="3 / 4">
        <h3>Complemento</h3>
        <p>{data.address.complement}</p>
      </S.InfoClinic>
      <S.InfoClinic gridCol="1 / 2">
        <h3>Estado</h3>
        <p>{data.address.state}</p>
      </S.InfoClinic>
      <S.InfoClinic gridCol="2/3">
        <h3>Numero</h3>
        <p>{data.address.number}</p>
      </S.InfoClinic>
      <S.InfoClinic gridCol="3 / 4">
        <h3>Cep</h3>
        <p>{data.cep}</p>
      </S.InfoClinic>
    </S.InfoClinicContent>
  )
}
