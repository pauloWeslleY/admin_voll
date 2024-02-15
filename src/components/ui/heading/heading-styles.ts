import { styled } from '@mui/material'

type HeadingIconProps = { image?: string }

export const HeadingIcon = styled('span')<HeadingIconProps>(({ image }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: 25,
  height: 25,
  backgroundImage: image ? `url('${image}')` : 'none',
}))

export const HeadingWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3.2),
}))
