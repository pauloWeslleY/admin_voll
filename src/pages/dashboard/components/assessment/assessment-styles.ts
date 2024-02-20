import { styled } from '@mui/material'

export const AssessmentWrap = styled('section')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',

  gap: theme.spacing(4),

  marginBottom: theme.spacing(4),
}))
