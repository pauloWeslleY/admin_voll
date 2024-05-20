import styled from '@emotion/styled'
import { alpha, css } from '@mui/material'
import MuiTableCell, {
  TableCellProps as MuiTableCellProps,
  tableCellClasses,
} from '@mui/material/TableCell'
import MuiTableRow, {
  TableRowProps as MuiTableRowProps,
} from '@mui/material/TableRow'
import { grey } from '@mui/material/colors'
import * as THEME from '@/styles'

export const TableCell = styled(MuiTableCell)<MuiTableCellProps>(
  () => css`
    &.${tableCellClasses.head} {
      color: ${THEME.COLORS.blue[300]};
      font-size: ${THEME.FONTS.fontSizes.lg};
      font-weight: ${THEME.FONTS.fontWeight.bold};
      font-family: ${THEME.FONTS.fontFamily.PUBLIC_SANS};
    }

    &.${tableCellClasses.body} {
      font-size: ${THEME.FONTS.fontSizes.md};
      color: ${grey[600]};
    }
  `,
)

export const TableRow = styled(MuiTableRow)<MuiTableRowProps>(
  () => css`
    &:nth-of-type(odd) {
      background-color: ${alpha(THEME.COLORS.grey[200], 0.2)};
      text-align: right;
    }
  `,
)
