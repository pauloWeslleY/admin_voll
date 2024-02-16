import { styled } from '@mui/material'

type HeadingIconProps = { image?: string }

export const HeadingIcon = styled('div')<HeadingIconProps>(({ image }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: 18,
  height: 23,
  padding: '1em',
  backgroundImage: image ? `url('${image}')` : 'none',
}))

export const HeadingWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3.2),
}))
