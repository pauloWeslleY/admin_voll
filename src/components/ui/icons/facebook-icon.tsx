import { FC } from 'react'
import { SVGIconProps } from './svg-props'

export const SVGFacebookIcon: FC<SVGIconProps> = (props) => (
  <svg
    width="12"
    height="25"
    viewBox="0 0 12 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.79576 24.1797V13.25H11.3503L11.8787 8.97063H7.79576V6.24487C7.79576 5.01001 8.12743 4.16454 9.83592 4.16454H12.0008V0.349273C10.9475 0.232176 9.88869 0.175636 8.82934 0.179913C5.68746 0.179913 3.53031 2.16956 3.53031 5.82213V8.96263H-0.00109863V13.242H3.53802V24.1797H7.79576Z"
      fill="#339CFF"
    />
  </svg>
)
