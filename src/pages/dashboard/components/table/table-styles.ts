import styled from '@emotion/styled'
import { alpha } from '@mui/material'
import MuiTableCell, {
  TableCellProps as MuiTableCellProps,
  tableCellClasses,
} from '@mui/material/TableCell'
import MuiTableRow, {
  TableRowProps as MuiTableRowProps,
} from '@mui/material/TableRow'
import { COLORS, FONTS } from '@/styles'
import { grey } from '@mui/material/colors'

export const TableCell = styled(MuiTableCell)<MuiTableCellProps>(
  () => `
  &.${tableCellClasses.head} {
    color:${COLORS.blue[300]};
    font-size: ${FONTS.fontSizes.lg};
    font-weight: ${FONTS.fontWeight.bold};
    font-family: ${FONTS.fontFamily.PUBLIC_SANS};
  }

  &.${tableCellClasses.body} {
    font-size: ${FONTS.fontSizes.md};
    color:${grey[600]};
  }
`,
)

export const TableRow = styled(MuiTableRow)<MuiTableRowProps>(
  () => `
  &:nth-of-type(odd){
    background-color: ${alpha(COLORS.grey[200], 0.2)};
    align: right;
  }
`,
)
