import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material'
import MuiTable from '@mui/material/Table'
import { ConsultationProps } from '@/components/types'
import * as S from './table-styles'
import { grey } from '@mui/material/colors'

const TABLE_HEADER = [
  'Data',
  'horário',
  'Profissional',
  'Especialidade',
  'Paciente',
  'Modalidade',
]

type TableProps = {
  data: ConsultationProps[] | null
}

export const Table = ({ data }: TableProps) => {
  const theme = useTheme()

  return (
    <TableContainer sx={{ borderRadius: theme.spacing(2.6) }}>
      <MuiTable
        sx={{ minWidth: 700, background: grey[100] }}
        arial-label="table-customization"
      >
        <TableHead>
          <TableRow>
            {TABLE_HEADER.map((props, index) => (
              <S.TableCell key={index}>{props}</S.TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.map((props) => (
            <S.TableRow key={props.id}>
              <S.TableCell component="th" scope="row">
                {new Date(props.date).toLocaleDateString()}
              </S.TableCell>
              <S.TableCell component="th" scope="row">
                {props.hour}
              </S.TableCell>
              <S.TableCell component="th" scope="row">
                {props.professional[0].name}
              </S.TableCell>
              <S.TableCell component="th" scope="row">
                {props.professional[0].specialty}
              </S.TableCell>
              <S.TableCell component="th" scope="row">
                {props.patient}
              </S.TableCell>
              <S.TableCell component="th" scope="row">
                {props.modality}
              </S.TableCell>
            </S.TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}
