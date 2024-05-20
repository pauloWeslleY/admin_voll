import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import MuiTable from '@mui/material/Table'
import { useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ConsultationProps } from '@/components/types'
import { useTable } from './useTable'
import { TableContent } from './table-content'
import * as S from './styles'

type TableProps = {
  data: ConsultationProps[] | null
}

export const Table = ({ data }: TableProps) => {
  const { loadTableHeader } = useTable()
  const theme = useTheme()

  return (
    <TableContainer sx={{ borderRadius: theme.spacing(2.6) }}>
      <MuiTable
        sx={{ minWidth: 700, background: grey[100] }}
        arial-label="table-customization"
      >
        <TableHead>
          <TableRow>
            {loadTableHeader().map((props, index) => (
              <S.TableCell key={index}>{props}</S.TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.map((props) => (
            <S.TableRow key={props.id}>
              <TableContent data={props} />
            </S.TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}
