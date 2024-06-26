import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const SVGGraphicIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9844 6H17.0156V17.0156H12.9844V6ZM0.984375 17.0156V9H5.01562V17.0156H0.984375ZM6.98438 17.0156V0.984375H11.0156V17.0156H6.98438Z"
        fill="#339CFF"
      />
    </svg>
  </SvgIcon>
)
