import { styled } from '@mui/material'

export const FormWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginTop: theme.spacing(8),

  '& > form': {
    marginInline: theme.spacing(72),

    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(4),
  },
}))
