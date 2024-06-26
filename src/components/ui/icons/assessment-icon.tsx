import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const SVGAssessmentIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0H13V2.01562H1V0ZM12.0156 3H1.98438C1.45312 3 0.984375 3.20312 0.578125 3.60938C0.203125 3.98438 0.015625 4.45312 0.015625 5.01562V15.9844C0.015625 16.5469 0.203125 17.0312 0.578125 17.4375C0.984375 17.8125 1.45312 18 1.98438 18H12.0156C12.5469 18 13 17.8125 13.375 17.4375C13.7812 17.0312 13.9844 16.5469 13.9844 15.9844V5.01562C13.9844 4.45312 13.7812 3.98438 13.375 3.60938C13 3.20312 12.5469 3 12.0156 3ZM10.9844 12H8.5V14.4844H5.5V12H3.01562V9H5.5V6.51562H8.5V9H10.9844V12Z"
        fill="#339CFF"
      />
    </svg>
  </SvgIcon>
)
