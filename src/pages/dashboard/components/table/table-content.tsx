import { ConsultationProps } from '@/components/types'
import * as S from './styles'

type TableContentType = {
  data: ConsultationProps
}

const TableContent = ({ data }: TableContentType) => {
  return (
    <>
      <S.TableCell component="th" scope="row">
        {new Date(data.date).toLocaleDateString()}
      </S.TableCell>
      <S.TableCell component="th" scope="row">
        {data.hour}
      </S.TableCell>
      <S.TableCell component="th" scope="row">
        {data.professional[0].name}
      </S.TableCell>
      <S.TableCell component="th" scope="row">
        {data.professional[0].specialty}
      </S.TableCell>
      <S.TableCell component="th" scope="row">
        {data.patient}
      </S.TableCell>
      <S.TableCell component="th" scope="row">
        {data.modality}
      </S.TableCell>
    </>
  )
}

export { TableContent }
