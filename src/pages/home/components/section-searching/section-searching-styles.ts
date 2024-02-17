import { SHADOW } from '@/styles'
import { styled } from '@mui/material'

export const SectionSearchingWrap = styled('div')(({ theme }) => ({
  padding: theme.spacing(8),
  marginInline: theme.spacing(32),
  marginBlock: theme.spacing(10),
  borderRadius: theme.spacing(2),
  boxShadow: SHADOW[1],

  '& > form': {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(4),
  },
}))
