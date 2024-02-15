import { styled } from '@mui/material'
import { COLORS } from '@/styles'

export const Wrapper = styled('section')(() => ({
  background: COLORS.grey[100],
  margin: '4em',
  borderRadius: 16,
  padding: '2em',
  height: '100%',
}))
